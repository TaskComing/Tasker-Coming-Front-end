import * as React from 'react';
import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Input from '@mui/joy/Input';
// import { Button } from '@mui/material/Button';
// import { Input } from '@mui/material';
import { Input, FormControl, Button } from '@mui/material';

export default function InputFormProps() {
  return (
    <Box
      sx={{
        py: 2,
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <FormControl
        onSubmit={(event) => {
          event.preventDefault();
        }}
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <Input
          placeholder="                 .....    Search   Task    ......   "
          required
          sx={{
            mb: 1,
            border: 'white 3px solid',
            borderRadius: '10px',
            color: 'white',
            width: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            fontSize: '16px',
          }}
        />
        <Button type="submit" sx={{ color: 'white' }}>
          Search
        </Button>
      </FormControl>
    </Box>
  );
}
