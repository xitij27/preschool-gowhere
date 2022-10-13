import React, {useState, useEffect} from "react";
//import { GoogleMap, Marker, InfoWindow, useLoadScript, LoadScript } from "@react-google-maps/api";

import {interaction, layer, custom, control,
        Interaction, Overlays, Controls,
        Map, Layers, Overlay, Util
} from "react-openlayers";


export function Mapsfunc() {
    return(
        <div>
            <Map view={{center:[1.352083,103.819839], zoom:2}}>
                <Layers>
                    <layer.Tile></layer.Tile>
                </Layers>
            </Map>

        </div>
    )
}