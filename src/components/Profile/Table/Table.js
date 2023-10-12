import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import styles from './ProfileTable.module.css'
import { Button } from "@mui/material";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import { PiNotePencilDuotone } from 'react-icons/pi';

function createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
    };
}

const rows = [
    createData('Durgesh chaudhary0', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary2', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary3', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary4', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary1', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary8', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary9', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary12', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary321', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary21', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary78', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary65', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary45', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary54', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary20', "durgesh123@gmail.com", "+91 8052941488"),
    createData('Durgesh chaudhary10', "durgesh123@gmail.com", "+91 8052941488"),
];

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Email',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Phone No.',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Action',
    }, {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Details',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } =
        props;

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox" sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}>
                    S. NO
                </TableCell>
                <TableCell padding="checkbox" sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}>
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected } = props;
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function PTable({ setActive }) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;


    const handleActive = () => {
        setActive("ProfileDetails")
    }


    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {rows.map((row, index) => {
                                const isItemSelected = isSelected(row.name);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.name)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.name}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox" sx={{ border: "1px solid rgba(224, 224, 224, 1)" }} >
                                            1
                                        </TableCell>

                                        <TableCell padding="checkbox" sx={{ border: "1px solid rgba(224, 224, 224, 1)" }} >
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                            sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
                                        >
                                            {row.name}
                                        </TableCell>
                                        <TableCell sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}>{row.calories}</TableCell>
                                        <TableCell sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}>{row.fat}</TableCell>

                                        <TableCell size='small' className={styles.clr} padding="normal" align="center" sx={{ border: " 1px solid rgba(224, 224, 224, 1)", my: 0 }} >
                                            <PiNotePencilDuotone sx={{ color: "#8A92A6" }} className={styles.editicon} />
                                            <BlockOutlinedIcon sx={{ mx: 1, color: "#8A92A6" }} className={styles.colorIcon} />
                                            <DeleteOutlineOutlinedIcon sx={{ mx: 1, color: "#8A92A6" }} className={styles.colorIcon} />
                                        </TableCell>

                                        <TableCell size='small' className={styles.clr} padding="normal" sx={{ border: " 1px solid rgba(224, 224, 224, 1)", my: 0 }}>
                                            <Button onClick={handleActive} variant="contained" size="medium" sx={{
                                                backgroundColor: "#8A92A6",
                                                color: "white",
                                                '&:hover': {
                                                    backgroundColor: '#fff',
                                                    color: '#3c52b2',
                                                },
                                            }} >
                                                view
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
