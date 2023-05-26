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
import Favorite from './Favorite';

const useStyles = createUseStyles({
  header_first: {
    marginLeft: '10px',
  },
  header_last: {
    marginRight: '10px',
  },
  coin: {
    display: 'flex',
    alignItems: 'center',
  },
  fav: {
    width: '40px',
  },
  coin_container: {
    display: 'flex',
    alignItems: 'center',
  },
  coin_subtext: {
    display: 'flex',
    alignItems: 'center',
  },
  coin_rank: {
    padding: '0 5px',
    marginRight: '5px',
    borderRadius: '5px',
    background: 'rgb(240 240 240)',
    color: 'rgb(88, 102, 126)',
  },
  coin_symbol: {
    color: 'rgb(88, 102, 126)',
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
            <StyledTableCell>
              <Box className={cls.header_first}>
                Coin
              </Box>
            </StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">
              <Box className={cls.header_last}>
                24h
              </Box>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {markets?.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell>
                <Box className={cls.coin}>
                  <Box className={cls.fav}>
                    <Favorite
                      active={favorites[row.id]}
                      onClick={() => onToggleFavorite(row.id)}
                    />
                  </Box>
                  <Box className={cls.coin_container}>
                    <img className={cls.logo} src={row.image} alt={`${row.symbol} Logo`} />
                    <Box className={cls.coin_text}>
                      <Typography sx={{ fontWeight: '500' }}>
                        {row.name}
                      </Typography>
                      <Box className={cls.coin_subtext}>
                        <Box className={cls.coin_rank}>
                          <Typography sx={{ fontSize: '0.775rem' }}>
                            {row.market_cap_rank}
                          </Typography>
                        </Box>
                        <Box className={cls.coin_symbol}>
                          <Typography sx={{ fontSize: '0.875rem', textTransform: 'uppercase' }}>
                            {row.symbol}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography>
                  {fiat === 'eur' ? '€' : '$'}{price(row.current_price)}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Box className={cls.header_last}>
                  <Typography
                    color={`${row.price_change_percentage_24h_in_currency > 0
                      ? "success.main"
                      : "error.main"}`}>
                    {priceChange(row.price_change_percentage_24h_in_currency)}
                  </Typography>
                </Box>
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
  padding: '20px 4px',
  borderBottom: `1px solid ${theme.palette.rowContrast}`,
}))