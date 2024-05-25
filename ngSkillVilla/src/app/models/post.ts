export class Post {
    id: number;
    userId: number;
    community_id: number;
    description: string;
    enabled: boolean;
    locationId: number;
    createdAt: string;
    UpdatedAt: string;

    constructor(
        id = 0,
        userId = 0,
        community_id = 0,
        description = '',
        enabled = false,
        locationId = 0,
        createdAt = '',
        UpdatedAt = ''
    ) {
        this.id = id;
        this.userId = userId;
        this.community_id = community_id;
        this.description = description;
        this.enabled = enabled;
        this.locationId = locationId;
        this.createdAt = createdAt;
        this.UpdatedAt = UpdatedAt;
    }

}
