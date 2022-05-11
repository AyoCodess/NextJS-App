import React from 'react';

function dashboard(req, res) {
  res.status(200).json({ name: 'Dashboard Api Route' });
}

export default dashboard;
