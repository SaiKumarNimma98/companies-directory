import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { companiesAPI } from '../../services/api';

// Initial state
const initialState = {
  companies: [],
  filters: {
    industries: [],
    locations: [],
  },
  stats: {
    totalCompanies: 0,
    industriesCount: 0,
    avgEmployees: 0,
  },
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalCompanies: 0,
    limit: 10,
    hasNextPage: false,
    hasPrevPage: false,
  },
  searchParams: {
    page: 1,
    limit: 10,
    search: '',
    industry: 'all',
    location: 'all',
    sortBy: 'name',
    sortOrder: 'asc',
  },
  viewMode: 'table', // 'table' or 'card'
  loading: false,
  error: null,
};

// Async thunks
export const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async (params, { rejectWithValue }) => {
    try {
      const response = await companiesAPI.getCompanies(params);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchFilters = createAsyncThunk(
  'companies/fetchFilters',
  async (_, { rejectWithValue }) => {
    try {
      const response = await companiesAPI.getFilters();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchStats = createAsyncThunk(
  'companies/fetchStats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await companiesAPI.getStats();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Slice
const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    // Update search parameters
    setSearchParams: (state, action) => {
      state.searchParams = {
        ...state.searchParams,
        ...action.payload,
      };
    },
    
    // Set page
    setPage: (state, action) => {
      state.searchParams.page = action.payload;
    },
    
    // Set limit
    setLimit: (state, action) => {
      state.searchParams.limit = action.payload;
      state.searchParams.page = 1; // Reset to first page
    },
    
    // Set search query
    setSearch: (state, action) => {
      state.searchParams.search = action.payload;
      state.searchParams.page = 1; // Reset to first page
    },
    
    // Set industry filter
    setIndustry: (state, action) => {
      state.searchParams.industry = action.payload;
      state.searchParams.page = 1; // Reset to first page
    },
    
    // Set location filter
    setLocation: (state, action) => {
      state.searchParams.location = action.payload;
      state.searchParams.page = 1; // Reset to first page
    },
    
    // Set sort parameters
    setSort: (state, action) => {
      state.searchParams.sortBy = action.payload.sortBy;
      state.searchParams.sortOrder = action.payload.sortOrder;
    },
    
    // Toggle view mode
    toggleViewMode: (state) => {
      state.viewMode = state.viewMode === 'table' ? 'card' : 'table';
    },
    
    // Reset filters
    resetFilters: (state) => {
      state.searchParams = {
        ...initialState.searchParams,
        limit: state.searchParams.limit, // Keep current limit
      };
    },
    
    // Clear error
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Companies
      .addCase(fetchCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload.data;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch companies';
      })
      
      // Fetch Filters
      .addCase(fetchFilters.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filters = action.payload.data;
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.error = action.payload || 'Failed to fetch filters';
      })
      
      // Fetch Stats
      .addCase(fetchStats.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.stats = action.payload.data;
      })
      .addCase(fetchStats.rejected, (state, action) => {
        state.error = action.payload || 'Failed to fetch stats';
      });
  },
});

// Export actions
export const {
  setSearchParams,
  setPage,
  setLimit,
  setSearch,
  setIndustry,
  setLocation,
  setSort,
  toggleViewMode,
  resetFilters,
  clearError,
} = companiesSlice.actions;

// Selectors
export const selectCompanies = (state) => state.companies.companies;
export const selectFilters = (state) => state.companies.filters;
export const selectStats = (state) => state.companies.stats;
export const selectPagination = (state) => state.companies.pagination;
export const selectSearchParams = (state) => state.companies.searchParams;
export const selectViewMode = (state) => state.companies.viewMode;
export const selectLoading = (state) => state.companies.loading;
export const selectError = (state) => state.companies.error;

export default companiesSlice.reducer;