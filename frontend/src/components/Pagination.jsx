import React from 'react';
import {
  Box,
  Pagination as MuiPagination,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Paper,
} from '@mui/material';

const Pagination = ({ pagination, currentPage, limit, onPageChange, onLimitChange }) => {
  const { totalPages, totalCompanies } = pagination;

  // Calculate the range of items being displayed
  const startItem = (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, totalCompanies);

  return (
    <Paper
      elevation={2}
      sx={{
        p: 1.5,
        mt: 2.5,
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      {/* Items per page selector */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body2" color="text.secondary">
          Items per page:
        </Typography>
        <FormControl size="small" sx={{ minWidth: 80 }}>
          <Select
            value={limit}
            onChange={(e) => onLimitChange(e.target.value)}
            sx={{ height: 32 }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Pagination info */}
      <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
        Showing {startItem} - {endItem} of {totalCompanies} companies
      </Typography>

      {/* Pagination controls */}
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
        color="primary"
        showFirstButton
        showLastButton
        siblingCount={1}
        boundaryCount={1}
      />
    </Paper>
  );
};

export default Pagination;
