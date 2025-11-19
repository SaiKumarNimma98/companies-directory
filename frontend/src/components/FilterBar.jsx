import React from 'react';
import {
  Box,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Chip,
  Typography,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import SortIcon from '@mui/icons-material/Sort';

const FilterBar = ({
  searchParams,
  filters,
  onSearchChange,
  onIndustryChange,
  onLocationChange,
  onSortChange,
  onResetFilters,
  viewMode,
  onToggleView,
}) => {
  const sortOptions = [
    { value: 'name', label: 'Company Name' },
    { value: 'employees', label: 'Employees' },
    { value: 'founded', label: 'Founded Year' },
    { value: 'industry', label: 'Industry' },
  ];

  const hasActiveFilters =
    searchParams.search ||
    searchParams.industry !== 'all' ||
    searchParams.location !== 'all';

  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 1.5, md: 2.5 },
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 1.5,
          mb: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FilterListIcon sx={{ color: '#ff8c42' }} />
          <Typography sx={{ fontWeight: 600 }}>Filters</Typography>
          {hasActiveFilters && (
            <Chip label="Active" size="small" color="primary" sx={{ height: 20 }} />
          )}
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title={viewMode === 'table' ? 'Card View' : 'Table View'}>
          <IconButton onClick={onToggleView} color="primary">
            {viewMode === 'table' ? <ViewModuleIcon /> : <ViewListIcon />}
          </IconButton>
        </Tooltip>
      </Box>

      <Grid container spacing={{ xs: 1.5, md: 2 }}>
        {/* Search Input */}
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            size="small"
            label="Search Companies"
            placeholder="Search by name, description..."
            value={searchParams.search}
            onChange={(e) => onSearchChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'action.active' }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Industry Filter */}
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Industry</InputLabel>
            <Select
              value={searchParams.industry}
              label="Industry"
              onChange={(e) => onIndustryChange(e.target.value)}
            >
              <MenuItem value="all">All Industries</MenuItem>
              {filters.industries.map((industry) => (
                <MenuItem key={industry} value={industry}>
                  {industry}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Location Filter */}
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Location</InputLabel>
            <Select
              value={searchParams.location}
              label="Location"
              onChange={(e) => onLocationChange(e.target.value)}
            >
              <MenuItem value="all">All Locations</MenuItem>
              {filters.locations.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Sort By */}
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Sort By</InputLabel>
            <Select
              value={searchParams.sortBy}
              label="Sort By"
              onChange={(e) =>
                onSortChange({
                  sortBy: e.target.value,
                  sortOrder: searchParams.sortOrder,
                })
              }
              startAdornment={<SortIcon sx={{ mr: 1, color: 'action.active' }} />}
            >
              {sortOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Sort Order */}
        <Grid item xs={12} sm={6} md={1}>
          <FormControl fullWidth size="small">
            <InputLabel>Order</InputLabel>
            <Select
              value={searchParams.sortOrder}
              label="Order"
              onChange={(e) =>
                onSortChange({
                  sortBy: searchParams.sortBy,
                  sortOrder: e.target.value,
                })
              }
            >
              <MenuItem value="asc">Asc</MenuItem>
              <MenuItem value="desc">Desc</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Reset Button */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'stretch', sm: 'flex-end' } }}>
            <Tooltip title="Reset Filters">
              <Button
                variant="outlined"
                color="secondary"
                onClick={onResetFilters}
                disabled={!hasActiveFilters}
                startIcon={<ClearIcon />}
                sx={{
                  minHeight: 40,
                  px: 4,
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                Reset
              </Button>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FilterBar;
