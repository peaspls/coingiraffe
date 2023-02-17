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
import { styled } from '@mui/material/styles';
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
    <StyledTableContainer>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <StyledTableCell size='medium' >#</StyledTableCell>
            <StyledTableCell>Coin</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">24h</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {markets?.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell>
                {row.market_cap_rank}
              </StyledTableCell>
              <StyledTableCell>
                <Box className={cls.coin}>
                  <img className={cls.logo} src={row.image} alt={`${row.symbol} Logo`} />
                  <Typography>
                    {row.name}
                  </Typography>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography>
                  {fiat === 'eur' ? '€' : '$'}{price(row.current_price)}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography
                  color={`${row.price_change_percentage_24h_in_currency > 0 ? "success.main" : "error.main"}`}
                >
                  {priceChange(row.price_change_percentage_24h_in_currency)}
                </Typography>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

const StyledTableContainer = styled(TableContainer)({
  padding: '0 8px',
})

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '20px 8px',
  borderBottom: `1px solid ${theme.palette.mode === 'light'
    ? '#f0f0f0'
    : '#202020'
    }`,
}))