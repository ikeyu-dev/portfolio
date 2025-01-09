export interface AvatarInfo {
    avatarId: number;
    level: number;
    energyType: number;
}

export interface ProfilePicture {
    id: number;
}

export interface PlayerInfo {
    nickname: string;
    level: number;
    signature: string;
    worldLevel: number;
    nameCardId: number;
    finishAchievementNum: number;
    towerFloorIndex: number;
    towerLevelIndex: number;
    showAvatarInfoList: AvatarInfo[];
    profilePicture: ProfilePicture;
    theaterActIndex: number;
    theaterModeIndex: number;
    theaterStarIndex: number;
    fetterCount: number;
    towerStarIndex: number;
}

export interface PlayerData {
    playerInfo: PlayerInfo;
    ttl: number;
    uid: string;
}
