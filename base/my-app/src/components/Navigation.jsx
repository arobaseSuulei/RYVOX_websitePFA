import React from 'react';
import "@radix-ui/themes/styles.css";
import {Box,Tabs,Text} from "@radix-ui/themes";




export default function Navigation() {
    return(

        <Tabs.Root defaultValue="account">
            <Tabs.List>
                <Tabs.Trigger  value="account"><p className={'font-poppins font-semibold'}>All notes</p></Tabs.Trigger>
                <Tabs.Trigger  value="deuxio"><p className={'font-poppins font-semibold'}>deux</p></Tabs.Trigger>

            </Tabs.List>

            <Box pt="3">
                <Tabs.Content value="account">
                    hey
                </Tabs.Content>

                <Tabs.Content value="deuxio">
                    deuxxx
                </Tabs.Content>




            </Box>
        </Tabs.Root>


    );
}