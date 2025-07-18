import type{ TileType } from "../utils/types";
import { START_TILE_CONFIGURATION, END_TILE_CONFIGURATION } from "../utils/constants";
import { createContext } from "react";
import type { ReactNode } from "react";
import { useState } from "react";

interface TileContextInterface {
    startTile: TileType;
    setStartTile: (tile: TileType) => void;
    endTile: TileType;
    setEndTile: (tile: TileType) => void;
}

export const TileContext = createContext<TileContextInterface | undefined>(undefined);

export const TileProvider = ({children}:{children:ReactNode}) => {
    const [startTile, setStartTile] = useState<TileType>(START_TILE_CONFIGURATION);
    const [endTile, setEndTile] = useState<TileType>(END_TILE_CONFIGURATION);

    return (
        <TileContext.Provider value={{ startTile, setStartTile, endTile, setEndTile }}>
            {children}
        </TileContext.Provider>
    );
}

