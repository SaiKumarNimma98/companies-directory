import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';

const StatsCards = ({ stats }) => {
  const statsData = [
    {
      title: 'Total Companies',
      value: stats.totalCompanies || 0,
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      color: '#1f7a8c',
      bgColor: '#e0f2f1',
    },
    {
      title: 'Industries',
      value: stats.industriesCount || 0,
      icon: <CategoryIcon sx={{ fontSize: 40 }} />,
      color: '#ff8c42',
      bgColor: '#fff1e0',
    },
    {
      title: 'Avg. Employees',
      value: stats.avgEmployees || 0,
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      color: '#6a4c93',
      bgColor: '#f2e7ff',
    },
  ];

  return (
    <Grid container spacing={{ xs: 1.5, md: 2 }}>
      {statsData.map((stat, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            elevation={3}
            sx={{
              height: '100%',
              borderRadius: 4,
              p: 0.5,
              border: '1px solid',
              borderColor: 'divider',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 6,
              },
            }}
          >
            <CardContent sx={{ px: 2.5, py: 2.5 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {stat.title}
                  </Typography>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                    {stat.value.toLocaleString()}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: stat.bgColor,
                    color: stat.color,
                    borderRadius: '50%',
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {stat.icon}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCards;
