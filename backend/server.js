const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Load companies data
const companiesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'companies-data.json'), 'utf-8')
);

// GET /api/companies - Fetch companies with pagination and filters
app.get('/api/companies', (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = '',
      industry = '',
      location = '',
      sortBy = 'name',
      sortOrder = 'asc'
    } = req.query;

    let filteredCompanies = [...companiesData];

    // Apply search filter (searches in name, description, location)
    if (search) {
      const searchLower = search.toLowerCase();
      filteredCompanies = filteredCompanies.filter(company =>
        company.name.toLowerCase().includes(searchLower) ||
        company.description.toLowerCase().includes(searchLower) ||
        company.location.toLowerCase().includes(searchLower)
      );
    }

    // Apply industry filter
    if (industry && industry !== 'all') {
      filteredCompanies = filteredCompanies.filter(
        company => company.industry === industry
      );
    }

    // Apply location filter
    if (location && location !== 'all') {
      filteredCompanies = filteredCompanies.filter(company =>
        company.location.includes(location)
      );
    }

    // Apply sorting
    filteredCompanies.sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];

      // Handle numeric sorting
      if (sortBy === 'employees' || sortBy === 'founded') {
        aVal = Number(aVal);
        bVal = Number(bVal);
      }

      // Handle string sorting
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

    // Calculate pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;

    const paginatedCompanies = filteredCompanies.slice(startIndex, endIndex);
    const totalCompanies = filteredCompanies.length;
    const totalPages = Math.ceil(totalCompanies / limitNum);

    // Response
    res.json({
      success: true,
      data: paginatedCompanies,
      pagination: {
        currentPage: pageNum,
        totalPages: totalPages,
        totalCompanies: totalCompanies,
        limit: limitNum,
        hasNextPage: pageNum < totalPages,
        hasPrevPage: pageNum > 1
      }
    });
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// GET /api/filters - Get available filter options
app.get('/api/filters', (req, res) => {
  try {
    const industries = [...new Set(companiesData.map(c => c.industry))].sort();
    const locations = [...new Set(companiesData.map(c => {
      // Extract country from location string
      const parts = c.location.split(', ');
      return parts[parts.length - 1];
    }))].sort();

    res.json({
      success: true,
      data: {
        industries,
        locations
      }
    });
  } catch (error) {
    console.error('Error fetching filters:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// GET /api/stats - Get companies statistics
app.get('/api/stats', (req, res) => {
  try {
    const totalCompanies = companiesData.length;
    const industriesCount = [...new Set(companiesData.map(c => c.industry))].length;
    const avgEmployees = Math.round(
      companiesData.reduce((sum, c) => sum + c.employees, 0) / totalCompanies
    );

    res.json({
      success: true,
      data: {
        totalCompanies,
        industriesCount,
        avgEmployees
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📊 Total companies loaded: ${companiesData.length}`);
});