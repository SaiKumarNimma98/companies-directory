# 🚀 Quick Reference Guide

## 📦 Installation Commands

```bash
# Create React App
npx create-react-app companies-directory-frontend
cd companies-directory-frontend

# Install all dependencies
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @reduxjs/toolkit react-redux axios

# Start development server
npm start

# Build for production
npm run build
```

---

## 📂 File Checklist

Make sure you have created all these files:

```
✅ src/app/store.js
✅ src/features/companies/companiesSlice.js
✅ src/services/api.js
✅ src/components/StatsCards.jsx
✅ src/components/FilterBar.jsx
✅ src/components/CompanyTable.jsx
✅ src/components/CompanyCard.jsx
✅ src/components/Pagination.jsx
✅ src/App.js
✅ src/index.js
✅ src/index.css
✅ .env
✅ .gitignore
```

---

## 🔗 API Endpoints Used

```javascript
GET /api/companies?page=1&limit=10&search=&industry=&location=&sortBy=name&sortOrder=asc
GET /api/filters
GET /api/stats
GET /health
```

---

## 🎨 Material UI Components Used

- AppBar, Toolbar
- Container, Box, Grid
- Card, CardContent
- Table, TableBody, TableCell, TableContainer, TableHead, TableRow
- TextField, Select, MenuItem, FormControl
- Button, IconButton, Tooltip
- Chip, Avatar, Divider
- Typography
- Paper
- CircularProgress
- Alert, AlertTitle
- Pagination

---

## 🔧 Redux Actions Quick Reference

```javascript
// Import
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies, setPage, setSearch, ... } from './features/companies/companiesSlice';

// Dispatch
dispatch(fetchCompanies(params));
dispatch(setPage(2));
dispatch(setSearch('tech'));
dispatch(setIndustry('Technology'));
dispatch(setLocation('USA'));
dispatch(setSort({ sortBy: 'name', sortOrder: 'asc' }));
dispatch(toggleViewMode());
dispatch(resetFilters());

// Select
const companies = useSelector(selectCompanies);
const loading = useSelector(selectLoading);
```

---

## 🎯 Key Features Implementation

### Search
```javascript
<TextField
  value={searchParams.search}
  onChange={(e) => onSearchChange(e.target.value)}
/>
```

### Filter by Industry
```javascript
<Select
  value={searchParams.industry}
  onChange={(e) => onIndustryChange(e.target.value)}
>
  <MenuItem value="all">All Industries</MenuItem>
  {industries.map(i => <MenuItem value={i}>{i}</MenuItem>)}
</Select>
```

### Pagination
```javascript
<MuiPagination
  count={totalPages}
  page={currentPage}
  onChange={(e, page) => onPageChange(page)}
/>
```

### View Toggle
```javascript
<IconButton onClick={onToggleView}>
  {viewMode === 'table' ? <ViewModuleIcon /> : <ViewListIcon />}
</IconButton>
```

---

## 🐛 Common Issues & Solutions

### 1. Backend Connection Error
```
Error: Network Error
Solution: Ensure backend is running on port 5000
Command: cd backend && npm start
```

### 2. CORS Error
```
Error: CORS policy blocked
Solution: Backend already has CORS enabled, restart both servers
```

### 3. Redux State Not Updating
```
Issue: Changes not reflecting
Solution: Check Redux DevTools, ensure dispatch is called correctly
```

### 4. Material UI Styles Not Loading
```
Issue: Components look unstyled
Solution: Check if @emotion packages are installed
Command: npm install @emotion/react @emotion/styled
```

---

## 📱 Testing Checklist

- [ ] Search works with company names
- [ ] Industry filter shows all industries
- [ ] Location filter works correctly
- [ ] Sorting by name (A-Z and Z-A)
- [ ] Sorting by employees (high to low)
- [ ] Pagination controls work
- [ ] Items per page changes properly
- [ ] Table view displays all columns
- [ ] Card view shows company details
- [ ] View toggle switches correctly
- [ ] Reset filters clears all
- [ ] Loading indicator appears
- [ ] Error messages display
- [ ] Stats cards show correct numbers
- [ ] Responsive on mobile
- [ ] Responsive on tablet
- [ ] Responsive on desktop

---

## 💡 Pro Tips

1. **Use Redux DevTools** - Install browser extension for debugging
2. **Check Network Tab** - Monitor API calls in browser DevTools
3. **Console Logs** - API requests and responses are logged
4. **Material UI Documentation** - Reference for component props
5. **Hot Reload** - Changes auto-refresh in dev mode

---

## 🚦 Development Workflow

```bash
# Terminal 1: Backend
cd companies-directory-backend
npm start
# Backend runs on http://localhost:5000

# Terminal 2: Frontend
cd companies-directory-frontend
npm start
# Frontend runs on http://localhost:3000
```

---

## 📊 Performance Optimization Tips

1. Use React.memo for components that don't change often
2. Debounce search input (add lodash if needed)
3. Use pagination instead of loading all data
4. Optimize images and assets
5. Lazy load components if needed

---

## ✅ Phase 2 Complete - Ready for Phase 3!

Your frontend is now fully functional with:
- ✅ Redux state management
- ✅ Material UI styling
- ✅ API integration
- ✅ All filters working
- ✅ Pagination implemented
- ✅ Dual view modes
- ✅ Responsive design

**Next**: Deploy to production! 🚀