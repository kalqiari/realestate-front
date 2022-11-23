import React from 'react';
import {Box, CircularProgress, NoSsr} from "@mui/material";


interface LoaderProps {}

const Loader = (props)=> {
    return (
        <NoSsr>
            <Box
                zIndex={1000}
                height="100%"
                display="flex"
                flex={1}
                alignItems="center"
                justifyContent="center"
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
            >
                <CircularProgress />
            </Box>
        </NoSsr>
    );
};

export default Loader;