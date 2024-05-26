export class Community {

    id: number;
    name: string;
    description: string;
    imageUrl: string;
    discordUrl: string;
    locationId: number | undefined;
    updatedAt: string | undefined;
    createdAt: string | undefined;
    enabled: boolean;

    constructor(
        id = 0,
        name = '',
        description = '',
        imageUrl = '',
        discordUrl = '',
        locationId = 0,
        updatedAt = '',
        createdAt = '',
        enabled = true
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.discordUrl = discordUrl;
        this.locationId = locationId;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
        this.enabled = enabled;
    }







}
