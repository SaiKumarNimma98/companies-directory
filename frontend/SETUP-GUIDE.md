# 🚀 Companies Directory - Complete Setup Guide

## 📋 Phase 2: Frontend Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend server running on `http://localhost:5000`

---

## 📁 Project Structure

```
companies-directory-frontend/
├── public/
│   └── index.html
├── src/
│   ├── app/
│   │   └── store.js                 # Redux store
│   ├── features/
│   │   └── companies/
│   │       └── companiesSlice.js    # Redux slice with actions
│   ├── components/
│   │   ├── CompanyCard.jsx          # Card view component
│   │   ├── CompanyTable.jsx         # Table view component
│   │   ├── FilterBar.jsx            # Filters and search
│   │   ├── Pagination.jsx           # Pagination controls
│   │   └── StatsCards.jsx           # Statistics cards
│   ├── services/
│   │   └── api.js                   # Axios API configuration
│   ├── App.js                       # Main app component
│   ├── index.js                     # Entry point
│   └── index.css                    # Global styles
├── .env                             # Environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ Installation Steps

### Step 1: Create React App

```bash
# Create a new React app
npx create-react-app companies-directory-frontend

# Navigate to the project
cd companies-directory-frontend
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @reduxjs/toolkit react-redux axios
```

### Step 3: Create the File Structure

Create the following folders inside `src/`:
```bash
mkdir -p src/app src/features/companies src/components src/services
```

### Step 4: Copy All the Code Files

Copy the code from all artifacts into their respective files:

1. **src/app/store.js** - Redux store configuration
2. **src/features/companies/companiesSlice.js** - Redux slice
3. **src/services/api.js** - Axios API service
4. **src/components/StatsCards.jsx** - Statistics component
5. **src/components/FilterBar.jsx** - Filter controls
6. **src/components/CompanyTable.jsx** - Table view
7. **src/components/CompanyCard.jsx** - Card view
8. **src/components/Pagination.jsx** - Pagination component
9. **src/App.js** - Main application
10. **src/index.js** - Entry point
11. **src/index.css** - Global styles
12. **.env** - Environment configuration
13. **.gitignore** - Git ignore file

### Step 5: Configure Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

### Step 6: Update package.json (if needed)

Ensure your `package.json` has the correct dependencies (already provided in the artifact).

---

## ▶️ Running the Application

### Development Mode

```bash
# Make sure backend is running first on port 5000
npm start
```

The app will open at `http://localhost:3000`

### Production Build

```bash
npm run build
```

---

## ✨ Features Implemented

### ✅ Core Features
- **Redux State Management** - Using Redux Toolkit for state
- **Material UI Styling** - Modern, responsive design
- **Axios API Integration** - Clean API service layer
- **Pagination** - Server-side pagination with page controls
- **Search Functionality** - Real-time search across companies
- **Multiple Filters**:
  - Industry filter
  - Location filter
  - Sort by multiple fields (name, employees, founded, industry)
  - Sort order (ascending/descending)

### ✅ Bonus Features
- **Dual View Modes** - Switch between table and card views
- **Statistics Dashboard** - Overview cards with key metrics
- **Loading States** - Smooth loading indicators
- **Error Handling** - Comprehensive error messages
- **Responsive Design** - Works on all screen sizes
- **Smooth Animations** - Hover effects and transitions
- **Items per Page** - Adjustable (5, 10, 20, 50)
- **Reset Filters** - Quick clear all filters button

---

## 🎨 UI Components

### 1. **App Bar**
- Company logo and title
- Refresh button

### 2. **Statistics Cards**
- Total Companies
- Industries Count
- Average Employees

### 3. **Filter Bar**
- Search input with icon
- Industry dropdown
- Location dropdown
- Sort by dropdown
- Sort order dropdown
- View mode toggle (Table/Card)
- Reset filters button

### 4. **Company Display**
- **Table View**: Comprehensive table with all details
- **Card View**: Beautiful card layout with icons

### 5. **Pagination**
- Page numbers
- Items per page selector
- First/Last page buttons
- Current range display

---

## 🔧 Redux Architecture

### Store Structure
```javascript
{
  companies: {
    companies: [],           // Current page companies
    filters: {
      industries: [],
      locations: []
    },
    stats: {
      totalCompanies: 0,
      industriesCount: 0,
      avgEmployees: 0
    },
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalCompanies: 0,
      limit: 10
    },
    searchParams: {
      page: 1,
      limit: 10,
      search: '',
      industry: 'all',
      location: 'all',
      sortBy: 'name',
      sortOrder: 'asc'
    },
    viewMode: 'table',
    loading: false,
    error: null
  }
}
```

### Available Actions
- `fetchCompanies` - Fetch companies with filters
- `fetchFilters` - Get filter options
- `fetchStats` - Get statistics
- `setPage` - Change page
- `setLimit` - Change items per page
- `setSearch` - Update search query
- `setIndustry` - Set industry filter
- `setLocation` - Set location filter
- `setSort` - Update sorting
- `toggleViewMode` - Switch between table/card
- `resetFilters` - Clear all filters

---

## 🧪 Testing the Application

### 1. Test Filters
- Try searching for company names
- Filter by different industries
- Filter by locations
- Try combining multiple filters

### 2. Test Sorting
- Sort by company name (A-Z, Z-A)
- Sort by employees (ascending/descending)
- Sort by founded year
- Sort by industry

### 3. Test Pagination
- Navigate through pages
- Change items per page
- Check if filters reset page to 1

### 4. Test View Modes
- Toggle between table and card views
- Check responsiveness in both modes

### 5. Test Edge Cases
- Search with no results
- Clear all filters
- Refresh data

---

## 📱 Responsive Breakpoints

- **xs** (< 600px): Mobile phones
- **sm** (600px - 900px): Tablets
- **md** (900px - 1200px): Small laptops
- **lg** (1200px+): Desktops

---

## 🎯 Next Steps

After confirming the frontend works correctly:

1. **Test all features thoroughly**
2. **Fix any bugs or issues**
3. **Optimize performance**
4. **Prepare for deployment (Phase 3)**

---

## 🐛 Troubleshooting

### Issue: Cannot connect to backend
**Solution**: Ensure backend is running on `http://localhost:5000`

### Issue: CORS errors
**Solution**: Backend has CORS enabled, but check backend console

### Issue: Redux state not updating
**Solution**: Check Redux DevTools extension in browser

### Issue: Material UI styles not loading
**Solution**: Ensure all MUI packages are installed correctly

---

## 📞 Support

If you encounter any issues, check:
1. Backend server is running
2. All dependencies are installed
3. `.env` file is configured correctly
4. Port 3000 is not in use

---

## ✅ Phase 2 Checklist

- [x] Redux state management implemented
- [x] Material UI components styled
- [x] Axios API integration complete
- [x] Pagination working
- [x] Search functionality added
- [x] Multiple filters implemented
- [x] Sorting feature added
- [x] Table and Card views created
- [x] Loading states handled
- [x] Error handling implemented
- [x] Responsive design ensured
- [x] Statistics dashboard added

**Status**: ✅ PHASE 2 COMPLETE - Ready for Phase 3 (Deployment)

---

Made with ❤️ using React, Redux, Material UI, and Axios