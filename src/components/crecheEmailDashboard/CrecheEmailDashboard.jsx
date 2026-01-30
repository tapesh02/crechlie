'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Stack,
} from '@mui/material';
import { MdEmail, MdPerson } from 'react-icons/md';
import FollowupEmailForm from '@components/followupEmailForm/FollowupEmailForm';
import { mockCrecheEmails, mockUserProfile } from '@/mockData/crecheEmails';

export default function CrecheEmailDashboard() {
  const [emails, setEmails] = useState(mockCrecheEmails);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleSendFollowup = (followupData) => {
    console.log('🚀 Sending email:', {
      to: followupData.to,
      subject: followupData.subject,
      status: followupData.status,
      preview: followupData.body.substring(0, 100) + '...'
    });
    
    setEmails(prev =>
      prev.map(email =>
        email.id === selectedEmail.id
          ? { 
              ...email, 
              status: followupData.status === 'other' ? 'contacted' : followupData.status,
              lastFollowup: new Date().toISOString()
            }
          : email
      )
    );
    
    setTimeout(() => {
      setSelectedEmail(null);
    }, 2000);
  };

  const handleRowClick = (email) => {
    setSelectedEmail(email);
  };

  const statusColorMap = {
    new: 'warning',
    waiting: 'info',
    accepted: 'success',
    contacted: 'primary',
    rejected: 'error'
  };

  return (
    <>
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        alignItems="center" 
        spacing={2} 
        sx={{ mb: 4, pt: 2, pl: { xs: 2, md: 3 } }}
      >
        <MdEmail style={{ fontSize: 32 }} />
        <Typography variant="h4" component="h1">
          Sunny Days Creche - Enquiries ({emails.length})
        </Typography>
      </Stack>

      <Box sx={{ px: { xs: 1, sm: 2, md: 3 }, pb: 3 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Paper sx={{ 
              p: { xs: 2, sm: 3 }, 
              minHeight: 600,
              display: 'flex', 
              flexDirection: 'column' 
            }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Incoming parent emails ({emails.length})
              </Typography>
              
              <TableContainer sx={{ flex: 1 }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Parent</TableCell>
                      <TableCell>Child</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Last Follow-up</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {emails.map((email) => (
                      <TableRow 
                        key={email.id}
                        hover
                        onClick={() => handleRowClick(email)}
                        sx={{ cursor: 'pointer' }}
                      >
                        <TableCell>
                          {new Date(email.date).toLocaleDateString('en-GB')}
                        </TableCell>
                        <TableCell>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <MdPerson style={{ fontSize: 20 }} />
                            <span>{email.parentName}</span>
                          </Stack>
                        </TableCell>
                        <TableCell>{email.childName || 'N/A'}</TableCell>
                        <TableCell>
                          <Chip 
                            label={email.status.toUpperCase()} 
                            size="small"
                            sx={(theme) => {
                              const colorKey = statusColorMap[email.status] || 'default';
                              return {
                                backgroundColor: theme.palette[colorKey]?.light || theme.palette.grey[200],
                                color: theme.palette[colorKey]?.dark || theme.palette.text.primary,
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                fontSize: '0.7rem',
                                height: 24,
                                borderRadius: 12,
                                // ✅ Perfect alignment
                                '& .MuiChip-label': {
                                  paddingLeft: '8px',
                                  paddingRight: '8px'
                                }
                              };
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          {email.lastFollowup ? 
                            new Date(email.lastFollowup).toLocaleDateString('en-GB') : 
                            'None'
                          }
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            {selectedEmail ? (
              <Paper sx={{ p: { xs: 2, sm: 3 }, minHeight: 600 }}>
                <Stack spacing={3}>
                  <Typography variant="h6" gutterBottom>
                    Follow-up: {selectedEmail.parentName}
                    <Chip 
                      label={selectedEmail.childName || 'No child name'} 
                      size="small" 
                      variant="outlined"
                      sx={{ ml: 2 }}
                    />
                  </Typography>
                  <FollowupEmailForm
                    parentName={selectedEmail.parentName}
                    childName={selectedEmail.childName}
                    parentEmail={selectedEmail.parentEmail}
                    crecheName={mockUserProfile.crecheName}
                    onSend={handleSendFollowup}
                  />
                </Stack>
              </Paper>
            ) : (
              <Paper sx={{ 
                minHeight: 600,
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                textAlign: 'center',
                p: { xs: 2, sm: 3 }
              }}>
                <MdEmail style={{ fontSize: 64 }} />
                <Typography variant="h6" sx={{ mt: 3 }} color="text.secondary">
                  Select an enquiry to send follow-up
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Click any row above to load parent details and templates
                </Typography>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
