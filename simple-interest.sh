#!/bin/bash

# Simple Interest Calculator

echo "Welcome to the Simple Interest Calculator!"

# Prompt for principal amount
read -p "Enter the principal amount (P): " principal

# Prompt for annual interest rate in percentage
read -p "Enter the annual interest rate (R) in %: " rate

# Prompt for time in years
read -p "Enter the time period (T) in years: " time

# Calculate simple interest: SI = (P * R * T) / 100
simple_interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

echo "----------------------------------------"
echo "Principal Amount: $principal"
echo "Annual Interest Rate: $rate%"
echo "Time Period: $time years"
echo "Calculated Simple Interest: $simple_interest"
echo "----------------------------------------"
