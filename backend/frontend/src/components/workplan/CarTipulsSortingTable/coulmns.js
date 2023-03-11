import { ColumnFilter } from './ColumnFilter'
export const COLUMNS = [
    {
        Header: 'מס` סידורי',
        accessor: '_id',
        Filter: ColumnFilter
    },
    {
        Header: 'תאריך טיפול אחרון',
        accessor: 'lastipuldate',
        Filter: ColumnFilter
    },
    {
        Header: 'סוג טיפול זכאות',
        accessor: 'zkaottipul',
        Filter: ColumnFilter
    },
    {
        Header: 'סוג טיפול בפועל',
        accessor: 'tipultype',
        Filter: ColumnFilter
    },
    {
        Header: 'תאריך טולרנס עליון',
        accessor: 'tolarancedate',
        Filter: ColumnFilter
    },
    {
        Header: 'גוף ביצוע',
        accessor: 'gofbizoa',
        Filter: ColumnFilter
    },
    {
        Header: 'הערות',
        accessor: 'description',
        Filter: ColumnFilter
    },
    {
        Header: 'סטטוס',
        accessor: 'status',
        Filter: ColumnFilter
    },
    
]