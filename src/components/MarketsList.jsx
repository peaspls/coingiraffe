import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Coin from './Coin';
import Price from './Price';
import PriceChange from './PriceChange';

export default function MarketsList(props) {
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
            <Row
              key={row.id}
              row={row}
              fiat={fiat}
              favorites={favorites}
              onToggleFavorite={onToggleFavorite} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function Row(props) {
  const { row, fiat, favorites, onToggleFavorite } = props;

  return (
    <>
      <TableRow>
        <TableCell>
          {row.market_cap_rank}
        </TableCell>
        <TableCell>
          <Coin name={row.name} image={row.image} symbol={row.symbol} />
        </TableCell>
        <TableCell align="right">
          <Price value={row.current_price} fiat={fiat} />
        </TableCell>
        <TableCell align="right">
          <PriceChange value={row.price_change_percentage_24h_in_currency} />
        </TableCell>
      </TableRow>
    </>
  );
}