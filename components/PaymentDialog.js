import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  Button,
  Typography
} from '@mui/material';

const PaymentDialog = ({ paymentDialogOpen, setPaymentDialogOpen, onPaymentSubmit }) => {
  const [selectedMethod, setSelectedMethod] = useState(null); // null initially, then 'upi' or 'debit'
  const [upiId, setUpiId] = useState('');
  const [debitCardDetails, setDebitCardDetails] = useState({ cardNumber: '', expiry: '', cvv: '' });

  // Handle button click to select payment method
  const handleMethodSelection = (method) => {
    setSelectedMethod(method);
  };

  const handlePaymentIdChange = (e) => {
    setUpiId(e.target.value);
  };

  const handleDebitCardChange = (e) => {
    const { name, value } = e.target;
    setDebitCardDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = () => {
    if (selectedMethod === 'upi' && upiId) {
      onPaymentSubmit({ method: 'UPI', id: upiId });
    } else if (selectedMethod === 'debit' && debitCardDetails.cardNumber && debitCardDetails.expiry && debitCardDetails.cvv) {
      onPaymentSubmit({ method: 'Debit Card', details: debitCardDetails });
    }
    setPaymentDialogOpen(false);
  };

  return (
    <Dialog open={paymentDialogOpen} onClose={() => setPaymentDialogOpen(false)} fullWidth maxWidth="sm">
      <DialogTitle>Choose Payment Method</DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="center" marginBottom={2}>
          <Button
            variant={selectedMethod === 'upi' ? 'contained' : 'outlined'}
            onClick={() => handleMethodSelection('upi')}
            sx={{ marginRight: 1 }}
          >
            UPI
          </Button>
          <Button
            variant={selectedMethod === 'debit' ? 'contained' : 'outlined'}
            onClick={() => handleMethodSelection('debit')}
          >
            Debit Card
          </Button>
        </Box>

        {/* UPI Form */}
        {selectedMethod === 'upi' && (
          <Box>
            <Typography variant="h6">Enter UPI ID</Typography>
            <TextField
              autoFocus
              margin="dense"
              label="UPI ID"
              type="text"
              fullWidth
              variant="outlined"
              value={upiId}
              onChange={handlePaymentIdChange}
              placeholder="Enter UPI ID (e.g., user@bank)"
            />
          </Box>
        )}

        {/* Debit Card Form */}
        {selectedMethod === 'debit' && (
          <Box>
            <Typography variant="h6">Enter Debit Card Details</Typography>
            <TextField
              label="Card Number"
              type="text"
              fullWidth
              variant="outlined"
              name="cardNumber"
              value={debitCardDetails.cardNumber}
              onChange={handleDebitCardChange}
              placeholder="1234 5678 9101 1121"
              inputProps={{ maxLength: 16 }}
              margin="dense"
            />
            <TextField
              label="Expiry Date"
              type="text"
              fullWidth
              variant="outlined"
              name="expiry"
              value={debitCardDetails.expiry}
              onChange={handleDebitCardChange}
              placeholder="MM/YY"
              inputProps={{ maxLength: 5 }}
              margin="dense"
            />
            <TextField
              label="CVV"
              type="password"
              fullWidth
              variant="outlined"
              name="cvv"
              value={debitCardDetails.cvv}
              onChange={handleDebitCardChange}
              placeholder="123"
              inputProps={{ maxLength: 3 }}
              margin="dense"
            />
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setPaymentDialogOpen(false)}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          disabled={
            !(selectedMethod === 'upi' ? upiId : debitCardDetails.cardNumber && debitCardDetails.expiry && debitCardDetails.cvv)
          }
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentDialog;
