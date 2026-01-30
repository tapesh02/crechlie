'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Chip,
  Paper,
} from '@mui/material';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { buildCrecheEmail } from './followupEmailFormHelper';

export default function FollowupEmailForm({ 
  parentName, 
  childName, 
  parentEmail = '', 
  crecheName = 'Your Creche',
  onSend 
}) {
  const [status, setStatus] = useState('waiting');
  const [to, setTo] = useState(parentEmail);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  useEffect(() => {
    setTo(parentEmail);
  }, [parentEmail]);

  // Generate template using helper
  const template = useMemo(() => {
    return buildCrecheEmail({
      parentName: parentName || 'Parent/Guardian',
      childName: childName || '',
      status,
      crecheName,
    });
  }, [parentName, childName, status, crecheName]);

  useEffect(() => {
    if (!isCustom) {
      setSubject(template.subject);
      setBody(template.body);
    }
  }, [template, isCustom]);

  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link'],
      ['clean']
    ],
  }), []);

  const handleSubmit = () => {
    if (!to || !body.trim()) return;
    onSend({
      to,
      subject: subject || template.subject,
      body,
      status,
      html: true
    });
  };

  // ✅ ULTRA-CLEAN: Direct theme access mapping
  const statusColorMap = {
    waiting: 'warning',
    accepted: 'success',
    rejected: 'error',
    other: 'info'
  };

  return (
    <Stack spacing={2} sx={{ height: '100%' }}>
      {/* Email Controls */}
      <Stack spacing={2}>
        <TextField
          label="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          fullWidth
          size="small"
        />

        <FormControl fullWidth size="small">
          <InputLabel>Email Type</InputLabel>
          <Select value={status} label="Email Type" onChange={(e) => setStatus(e.target.value)}>
            <MenuItem value="waiting">
              {/* ✅ Direct theme sx - LIGHT warning */}
              <Chip 
                label="WAITING" 
                size="small" 
                sx={(theme) => ({
                  backgroundColor: theme.palette.warning.light,
                  color: theme.palette.warning.dark,
                  border: `1px solid ${theme.palette.warning.main}`,
                  mr: 1,
                  fontSize: '0.65rem',
                  height: 22
                })}
              />
              Waiting List Confirmation
            </MenuItem>
            <MenuItem value="accepted">
              {/* ✅ Direct theme sx - LIGHT success */}
              <Chip 
                label="PLACE" 
                size="small" 
                sx={(theme) => ({
                  backgroundColor: theme.palette.success.light,
                  color: theme.palette.success.dark,
                  border: `1px solid ${theme.palette.success.main}`,
                  mr: 1,
                  fontSize: '0.65rem',
                  height: 22
                })}
              />
              Place Available
            </MenuItem>
            <MenuItem value="rejected">
              {/* ✅ Direct theme sx - LIGHT error */}
              <Chip 
                label="NO SPACE" 
                size="small" 
                sx={(theme) => ({
                  backgroundColor: theme.palette.error.light,
                  color: theme.palette.error.dark,
                  border: `1px solid ${theme.palette.error.main}`,
                  mr: 1,
                  fontSize: '0.65rem',
                  height: 22
                })}
              />
              Update on Availability
            </MenuItem>
            <MenuItem value="other">
              {/* ✅ Direct theme sx - LIGHT info */}
              <Chip 
                label="CUSTOM" 
                size="small" 
                sx={(theme) => ({
                  backgroundColor: theme.palette.info.light,
                  color: theme.palette.info.dark,
                  border: `1px solid ${theme.palette.info.main}`,
                  mr: 1,
                  fontSize: '0.65rem',
                  height: 22
                })}
              />
              Other (Rich Editor)
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>

      {/* Subject */}
      <TextField
        label="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        fullWidth
        size="small"
        helperText={isCustom ? "Custom subject" : "Auto-generated from template"}
      />

      {/* Rich Text Editor */}
      <Box sx={{ flex: 1, minHeight: 350 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
          <Typography variant="subtitle2" color="text.primary">
            Email Content
            {status !== 'other' && !isCustom && (
              <Chip 
                label="TEMPLATE" 
                size="small" 
                sx={(theme) => ({
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.dark,
                  ml: 1,
                  fontSize: '0.65rem',
                  height: 20
                })}
              />
            )}
          </Typography>
          {status !== 'other' && (
            <ToggleButtonGroup
              value={isCustom}
              exclusive
              onChange={(_, newValue) => setIsCustom(!!newValue)}
              size="small"
              color="primary"
            >
              <ToggleButton value={false}>Template</ToggleButton>
              <ToggleButton value={true}>Edit</ToggleButton>
            </ToggleButtonGroup>
          )}
        </Stack>

        <Paper variant="outlined" sx={{ height: '100%', borderRadius: 1 }}>
          <ReactQuill
            theme="snow"
            value={body}
            onChange={setBody}
            modules={modules}
            placeholder="Email content will auto-populate with templates..."
            style={{ height: '100%' }}
          />
        </Paper>
      </Box>

      {/* Send Button */}
      <Button
        variant="contained"
        fullWidth
        size="large"
        onClick={handleSubmit}
        disabled={!to || !body.trim()}
      >
        {status === 'other' ? 'Send Custom Email' : 'Send Template Email'}
      </Button>
    </Stack>
  );
}
