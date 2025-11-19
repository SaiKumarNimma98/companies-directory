import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Typography,
  Box,
  Avatar,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const CompanyTable = ({ companies }) => {
  const getIndustryColor = (industry) => {
    const colors = {
      Technology: 'primary',
      Finance: 'success',
      Healthcare: 'error',
      Energy: 'warning',
      'Food & Beverage': 'info',
      Automotive: 'secondary',
      Retail: 'default',
      Education: 'primary',
      'Real Estate': 'success',
      Construction: 'warning',
      Media: 'error',
      Travel: 'info',
      Sports: 'secondary',
      Agriculture: 'success',
      Logistics: 'warning',
      Insurance: 'primary',
      Gaming: 'error',
      Legal: 'info',
      Hospitality: 'secondary',
      Transportation: 'success',
      Telecommunications: 'primary',
      Aerospace: 'warning',
      Manufacturing: 'info',
      Marketing: 'error',
      Utilities: 'success',
    };
    return colors[industry] || 'default';
  };

  if (companies.length === 0) {
    return (
      <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
        <BusinessIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h6" color="text.secondary">
          No companies found
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Try adjusting your filters or search criteria
        </Typography>
      </Paper>
    );
  }

  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider' }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow
            sx={{
              background: 'linear-gradient(90deg, #20504f 0%, #1f7a8c 50%, #57a773 100%)',
            }}
          >
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Company</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Industry</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Location</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">
              Employees
            </TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">
              Founded
            </TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Revenue</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>CEO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map((company) => (
            <TableRow
              key={company.id}
              sx={{
                '& td': {
                  py: 1.5,
                },
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar sx={{ bgcolor: '#1f7a8c', width: 40, height: 40 }}>
                    <BusinessIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {company.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {company.description.substring(0, 40)}...
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Chip
                  label={company.industry}
                  color={getIndustryColor(company.industry)}
                  size="small"
                  sx={{ fontWeight: 500 }}
                />
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  <Typography variant="body2">{company.location}</Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, justifyContent: 'center' }}>
                  <PeopleIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  <Typography variant="body2">{company.employees.toLocaleString()}</Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, justifyContent: 'center' }}>
                  <CalendarTodayIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  <Typography variant="body2">{company.founded}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
                  {company.revenue}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{company.ceo}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompanyTable;
