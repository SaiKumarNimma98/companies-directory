import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Alert,
  AlertTitle,
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Stack,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import BusinessIcon from '@mui/icons-material/Business';

// Redux
import {
  fetchCompanies,
  fetchFilters,
  fetchStats,
  setPage,
  setLimit,
  setSearch,
  setIndustry,
  setLocation,
  setSort,
  toggleViewMode,
  resetFilters,
  selectCompanies,
  selectFilters,
  selectStats,
  selectPagination,
  selectSearchParams,
  selectViewMode,
  selectLoading,
  selectError,
} from './features/companies/companiesSlice';

// Components
import StatsCards from './components/StatsCards';
import FilterBar from './components/FilterBar';
import CompanyTable from './components/CompanyTable';
import CompanyCard from './components/CompanyCard';
import Pagination from './components/Pagination';

function App() {
  const dispatch = useDispatch();

  // Selectors
  const companies = useSelector(selectCompanies);
  const filters = useSelector(selectFilters);
  const stats = useSelector(selectStats);
  const pagination = useSelector(selectPagination);
  const searchParams = useSelector(selectSearchParams);
  const viewMode = useSelector(selectViewMode);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // Initial data fetch
  useEffect(() => {
    dispatch(fetchFilters());
    dispatch(fetchStats());
  }, [dispatch]);

  // Fetch companies when search params change
  useEffect(() => {
    const params = {
      page: searchParams.page,
      limit: searchParams.limit,
      search: searchParams.search,
      industry: searchParams.industry === 'all' ? '' : searchParams.industry,
      location: searchParams.location === 'all' ? '' : searchParams.location,
      sortBy: searchParams.sortBy,
      sortOrder: searchParams.sortOrder,
    };
    dispatch(fetchCompanies(params));
  }, [dispatch, searchParams]);

  // Handlers
  const handleSearchChange = (value) => {
    dispatch(setSearch(value));
  };

  const handleIndustryChange = (value) => {
    dispatch(setIndustry(value));
  };

  const handleLocationChange = (value) => {
    dispatch(setLocation(value));
  };

  const handleSortChange = (sortParams) => {
    dispatch(setSort(sortParams));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handleToggleView = () => {
    dispatch(toggleViewMode());
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLimitChange = (limit) => {
    dispatch(setLimit(limit));
  };

  const handleRefresh = () => {
    dispatch(fetchCompanies(searchParams));
    dispatch(fetchStats());
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar
        position="static"
        elevation={3}
        sx={{
          background: 'linear-gradient(90deg, #1f3b4d 0%, #20504f 50%, #3a6a6c 100%)',
        }}
      >
        <Toolbar>
          <BusinessIcon sx={{ mr: 2, fontSize: 32 }} />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Companies Directory
          </Typography>
          <Tooltip title="Refresh Data">
            <IconButton color="inherit" onClick={handleRefresh}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Box sx={{ py: { xs: 2, md: 4 } }}>
        <Container maxWidth="lg">
          <Stack spacing={3}>
            {/* Statistics Cards */}
            <StatsCards stats={stats} />

            {/* Filter Bar */}
            <FilterBar
              searchParams={searchParams}
              filters={filters}
              onSearchChange={handleSearchChange}
              onIndustryChange={handleIndustryChange}
              onLocationChange={handleLocationChange}
              onSortChange={handleSortChange}
              onResetFilters={handleResetFilters}
              viewMode={viewMode}
              onToggleView={handleToggleView}
            />

            {/* Error Alert */}
            {error && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
              </Alert>
            )}

            {/* Loading State */}
            {loading ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: 260,
                }}
              >
                <CircularProgress size={60} />
              </Box>
            ) : (
              <Stack spacing={2.5}>
                {/* Companies Display */}
                {viewMode === 'table' ? (
                  <CompanyTable companies={companies} />
                ) : (
                  <CompanyCard companies={companies} />
                )}

                {/* Pagination */}
                {companies.length > 0 && (
                  <Pagination
                    pagination={pagination}
                    currentPage={searchParams.page}
                    limit={searchParams.limit}
                    onPageChange={handlePageChange}
                    onLimitChange={handleLimitChange}
                  />
                )}
              </Stack>
            )}

            {/* Footer */}
            <Box sx={{ textAlign: 'center', py: 2 }}>
              <Typography variant="body2" color="text.secondary">
                © 2024 Companies Directory | Built with React + Redux + Material UI
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
