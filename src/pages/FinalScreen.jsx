import { Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { handleAmountChange, handleScoreChange } from '../redux/actions'

export const FinalScreen = () => {
  const { score } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleBackSettings = () =>{
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate("/")
  }

  return (
    <Box mt={30}>
      <Typography variant='h3' fontWeight="bold" mb={3}>FINAL SCORE: {score}</Typography>
      <Button onClick={handleBackSettings} variant="outlined">Back to Index</Button>
    </Box>
  )
}
