import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Typography,
    Paper,
    Container,
    Slider,
    Grid,
} from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '../../assets/background1.jpg'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Background = styled(Box)({
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    height: '100vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const ValueBox = styled(Box)({
    width: '80px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginLeft: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
});

const LoanInfoSection = styled(Paper)({
    padding: '20px',
    margin: '20px 0',
    background: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
});

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [interestRate, setInterestRate] = useState(13);
    const [loanTenure, setLoanTenure] = useState(12);
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const calculateMonthlyPayment = () => {
        const principal = loanAmount;
        const calculatedInterest = interestRate / 100 / 12;
        const calculatedPayments = loanTenure;

        const monthly =
            (principal * calculatedInterest) /
            (1 - Math.pow(1 + calculatedInterest, -calculatedPayments));

        setMonthlyPayment(Math.floor(monthly));
    };

    return (
        <Background>
            <Container maxWidth="sm">
                <Paper 
                    elevation={6} 
                    sx={{ p: 4, borderRadius: 2, background: 'rgba(255, 255, 255, 0.8)' }} 
                    data-aos="fade-up" // AOS animation for the calculator paper
                >
                    <Typography variant="h4" align="center" gutterBottom>
                        Personal Loan Calculator
                    </Typography>

                    <Grid container alignItems="center" sx={{ mb: 2 }}>
                        <Grid item xs>
                            <Typography variant="h6">Loan Amount (NPR)</Typography>
                        </Grid>
                        <Grid item>
                            <ValueBox>{loanAmount.toLocaleString()}</ValueBox>
                        </Grid>
                    </Grid>
                    <Slider
                        value={loanAmount}
                        onChange={(e, newValue) => setLoanAmount(newValue)}
                        aria-labelledby="loan-amount-slider"
                        valueLabelDisplay="off"
                        step={10000}
                        marks
                        min={50000}
                        max={5000000}
                    />

                    <Grid container alignItems="center" sx={{ mb: 2 }}>
                        <Grid item xs>
                            <Typography variant="h6">Loan Interest (%)</Typography>
                        </Grid>
                        <Grid item>
                            <ValueBox>{interestRate}</ValueBox>
                        </Grid>
                    </Grid>
                    <Slider
                        value={interestRate}
                        onChange={(e, newValue) => setInterestRate(newValue)}
                        aria-labelledby="interest-rate-slider"
                        valueLabelDisplay="off"
                        step={1}
                        marks
                        min={1}
                        max={20}
                    />

                    <Grid container alignItems="center" sx={{ mb: 2 }}>
                        <Grid item xs>
                            <Typography variant="h6">Loan Period (Months)</Typography>
                        </Grid>
                        <Grid item>
                            <ValueBox>{loanTenure}</ValueBox>
                        </Grid>
                    </Grid>
                    <Slider
                        value={loanTenure}
                        onChange={(e, newValue) => setLoanTenure(newValue)}
                        aria-labelledby="loan-tenure-slider"
                        valueLabelDisplay="off"
                        step={1}
                        marks
                        min={6}
                        max={60}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={calculateMonthlyPayment}
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Calculate
                    </Button>

                    {monthlyPayment !== null && (
                        <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                            Monthly Payment Installment (EMI): NPR {monthlyPayment.toLocaleString()}
                        </Typography>
                    )}
                </Paper>

                <LoanInfoSection data-aos="fade-up"> 
                    <Typography variant="h5">Personal Loans</Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Seek a way to better manage your finances or financial commitments.
                    </Typography>
                    <Button variant="outlined" color="primary" href="#apply" sx={{ mt: 1 }}>
                        APPLY NOW
                    </Button>
                </LoanInfoSection>
            </Container>
        </Background>
    );
};

export default LoanCalculator;