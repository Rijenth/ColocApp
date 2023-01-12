import { createStyles, Select, TextInput, Button } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
    },

    input: {
        height: 'auto',
        paddingTop: 18,
    },

    label: {
        position: 'absolute',
        pointerEvents: 'none',
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: theme.spacing.sm / 2,
        zIndex: 1,
    },
}));

export default function CreateResume() {
    // You can add these classes as classNames to any Mantine input, it will work the same
    const { classes } = useStyles();
    const dispatch = useDispatch();
    const [payload, setPayload] = useState({
        sum: '',
        why: '',
        date: new Date(),
        tag: '',
    });

    return (
        <div>
            <TextInput
                label="Sum" placeholder="10.99 $"
                classNames={classes}
                required={true}
                value={payload.sum}
                onChange={(e) => setPayload({...payload, sum: e.currentTarget.value})}
            />

            <TextInput
                style={{ marginTop: 20 }}
                label="Why" placeholder="Kader"
                classNames={classes}
                required={true}
                value={payload.why}
                onChange={(e) => setPayload({...payload, why: e.currentTarget.value})}
            />

            <Select
                style={{ marginTop: 20, zIndex: 2 }}
                data={['Rent', 'Food', 'Transport', 'Wifi', 'Water', 'Electricity', 'Other']}
                placeholder="Pick one"
                label="Tag"
                classNames={classes}
                required={true}
                value={payload.tag}
                onChange={(e) => setPayload({...payload, tag: e})}
            />

            <DatePicker
                style={{ marginTop: 20 }}
                label="Date"
                placeholder="January 1, 2023"
                classNames={classes}
                clearable={false}
                required={true}
                value={payload.date}
                onChange={(e) => setPayload({...payload, date: e})}
            />

            <Button style={{ marginTop: 20 }} color="blue" onClick={() => dispatch({type: 'ADD_RESUME', payload: payload})}>
                Create
            </Button><Button style={{ marginTop: 20 }} color="blue" onClick={() => console.log(payload)}>
                Create
            </Button>
        </div>
    );
}