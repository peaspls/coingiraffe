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
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { price, priceChange } from '../lib/formatter';
import FavoriteBtn from './FavoriteBtn';

const useStyles = createUseStyles({
  logo: {
    width: 20,
    marginRight: 5
  },
});

export default function MarketsList(props) {
  const cls = useStyles();
  const theme = useTheme();
  const { fiat, markets, favorites, onToggleFavorite } = props;

  return (
    <StyledTableContainer>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Box
                sx={{
                  marginLeft: '10px',
                }}>
                Coin
              </Box>
            </StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">
              <Box sx={{
                marginRight: '10px',
              }}>
                24h
              </Box>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {markets?.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <Box sx={{
                    width: '40px',
                  }}>
                    <FavoriteBtn
                      active={favorites[row.id]}
                      onClick={() => onToggleFavorite(row.id)}
                    />
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <img className={cls.logo} src={row.image} alt={`${row.symbol} Logo`} />
                    <Box className={cls.coin_text}>
                      <Typography sx={{ fontWeight: '500', fontSize: '0.875rem' }}>
                        {row.name}
                      </Typography>
                      <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}>
                        <Box
                          sx={{
                            bgcolor: (theme.palette.background.secondary),
                            color: (theme.palette.secondary.main),
                            padding: '0 5px',
                            marginRight: '5px',
                            borderRadius: '5px',
                          }}>
                          <Typography sx={{ fontSize: '0.75rem' }}>
                            {row.market_cap_rank}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            color: (theme.palette.secondary.main),
                          }}>
                          <Typography sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
                            {row.symbol}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography sx={{ fontSize: '0.875rem' }}>
                  {fiat === 'eur' ? '€' : '$'}{price(row.current_price)}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Box sx={{
                  marginRight: '10px',
                }}>
                  <Typography
                    sx={{ fontSize: '0.875rem' }}
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
  padding: '15px 4px',
  borderBottom: `1px solid ${theme.palette.rowContrast}`,
}))