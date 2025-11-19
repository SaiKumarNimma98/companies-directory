import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Grid,
  Avatar,
  Divider,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

const CompanyCard = ({ companies }) => {
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
      <Card elevation={2} sx={{ p: 4, textAlign: 'center' }}>
        <BusinessIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h6" color="text.secondary">
          No companies found
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Try adjusting your filters or search criteria
        </Typography>
      </Card>
    );
  }

  return (
    <Grid container spacing={{ xs: 2, md: 2.5 }}>
      {companies.map((company) => (
        <Grid item xs={12} sm={6} md={4} key={company.id}>
          <Card
            elevation={3}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'divider',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 8,
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              {/* Header with Avatar and Industry */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: '#1f7a8c',
                    width: 56,
                    height: 56,
                    mr: 2,
                  }}
                >
                  <BusinessIcon sx={{ fontSize: 30 }} />
                </Avatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 700, mb: 0.5 }}
                  >
                    {company.name}
                  </Typography>
                  <Chip
                    label={company.industry}
                    color={getIndustryColor(company.industry)}
                    size="small"
                    sx={{ fontWeight: 500 }}
                  />
                </Box>
              </Box>

              {/* Description */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2, minHeight: 40 }}
              >
                {company.description}
              </Typography>

              <Divider sx={{ my: 2 }} />

              {/* Company Details */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {/* Location */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 18, color: '#1f7a8c' }} />
                  <Typography variant="body2" color="text.secondary">
                    {company.location}
                  </Typography>
                </Box>

                {/* Employees */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PeopleIcon sx={{ fontSize: 18, color: '#57a773' }} />
                  <Typography variant="body2" color="text.secondary">
                    {company.employees.toLocaleString()} Employees
                  </Typography>
                </Box>

                {/* Founded */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarTodayIcon sx={{ fontSize: 18, color: '#6a4c93' }} />
                  <Typography variant="body2" color="text.secondary">
                    Founded in {company.founded}
                  </Typography>
                </Box>

                {/* Revenue */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AttachMoneyIcon sx={{ fontSize: 18, color: '#ff8c42' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#2b9348' }}>
                    Revenue: {company.revenue}
                  </Typography>
                </Box>

                {/* CEO */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonIcon sx={{ fontSize: 18, color: '#20504f' }} />
                  <Typography variant="body2" color="text.secondary">
                    CEO: {company.ceo}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CompanyCard;
