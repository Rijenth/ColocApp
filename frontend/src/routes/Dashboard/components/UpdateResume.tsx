import {
    createStyles,
    Select,
    TextInput,
    Button,
    Modal,
    Group,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";

import {useEffect, useState} from "react";

import { updateExpenses } from "../../../func/dashboard.func";

const useStyles = createStyles((theme) => ({
    root: {
        position: "relative",
    },

    input: {
        height: "auto",
        paddingTop: 18,
    },

    label: {
        position: "absolute",
        pointerEvents: "none",
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: theme.spacing.sm / 2,
        zIndex: 1,
    },
}));

export default function UpdateResume(open: boolean, id: number) {
    // You can add these classes as classNames to any Mantine input, it will work the same
    const { classes } = useStyles();
    const [opened, setOpened] = useState(false);
    const [payload, setPayload] = useState({
        amount: "",
        colocataireId: "",
        paidFord: "",
        createdAt: "",
        updateAt: "",
        desccription: "",
        colocationId: "",
    });

    useEffect(() => {
        setOpened(open);
        setOpened(false);
    }, [open]);

    return (
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Create Resume"
            >
                <TextInput
                    label="Desccription"
                    placeholder="10.99 $"
                    classNames={classes}
                    required={true}
                    value={payload.desccription}
                    onChange={(e) =>
                        setPayload({ ...payload, desccription: e.currentTarget.value })
                    }
                />

                <TextInput
                    label="Colocataire"
                    placeholder="Kader"
                    classNames={classes}
                    required={true}
                    value={payload.colocataireId}
                    onChange={(e) =>
                        setPayload({ ...payload, colocataireId: e.currentTarget.value })
                    }
                />


                <TextInput
                    style={{ marginTop: 20 }}
                    label="Amount"
                    placeholder="10.99 $"
                    classNames={classes}
                    required={true}
                    value={payload.amount}
                    onChange={(e) =>
                        setPayload({ ...payload, amount: e.currentTarget.value })
                    }
                />

                <Select
                    style={{ marginTop: 20, zIndex: 2 }}
                    data={[
                        "Rent",
                        "Food",
                        "Transport",
                        "Wifi",
                        "Water",
                        "Electricity",
                        "Other",
                    ]}
                    placeholder="Pick one"
                    label="Paid ford"
                    classNames={classes}
                    required={true}
                    value={payload.paidFord}
                    onChange={(e) => setPayload({ ...payload, paidFord: e })}
                />

                <DatePicker
                    style={{ marginTop: 20 }}
                    label="Date"
                    placeholder="January 1, 2023"
                    classNames={classes}
                    clearable={false}
                    required={true}
                    value={payload.createdAt}
                    onChange={(e) =>
                        setPayload({ ...payload, createdAt: e.toISOString() })
                    }
                />

                <Button
                    style={{ marginTop: 20 }}
                    color="blue"
                    onClick={() => updateExpenses(id, payload)}
                >
                    Create
                </Button>
            </Modal>
    );
}
