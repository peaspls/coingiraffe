import React from 'react';
import { createUseStyles } from 'react-jss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { price, priceChange } from '../lib/formatter';

const useStyles = createUseStyles({
  coin: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: 20,
    marginRight: 5
  },
});

export default function MarketsList(props) {
  const cls = useStyles();
  const { fiat, markets, favorites, onToggleFavorite } = props;

  return (
    <TableContainer>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell size='medium' >#</TableCell>
            <TableCell>Coin</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">24h</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {markets?.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {row.market_cap_rank}
              </TableCell>
              <TableCell>
                <Box className={cls.coin}>
                  <img className={cls.logo} src={row.image} alt={`${row.symbol} Logo`} />
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: '700' }}>
                    {row.name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Typography sx={{ fontSize: '0.875rem' }}>
                  {fiat === 'eur' ? '€' : '$'}{price(row.current_price)}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography sx={{ fontSize: '0.875rem' }}
                  color={`${row.price_change_percentage_24h_in_currency > 0 ? "success.main" : "error.main"}`}
                >
                  {priceChange(row.price_change_percentage_24h_in_currency)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}