// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class Endpoint extends lumi.NamedResource implements EndpointArgs {
    public readonly contentTypesToCompress: string[];
    public /*out*/ readonly hostName: string;
    public readonly isCompressionEnabled?: boolean;
    public readonly isHttpAllowed?: boolean;
    public readonly isHttpsAllowed?: boolean;
    public readonly location: string;
    public readonly endpointName?: string;
    public readonly origin: { hostName: string, httpPort: number, httpsPort: number, name: string }[];
    public readonly originHostHeader: string;
    public readonly originPath: string;
    public readonly profileName: string;
    public readonly querystringCachingBehaviour?: string;
    public readonly resourceGroupName: string;
    public readonly tags: {[key: string]: any};

    constructor(name: string, args: EndpointArgs) {
        super(name);
        this.contentTypesToCompress = args.contentTypesToCompress;
        this.isCompressionEnabled = args.isCompressionEnabled;
        this.isHttpAllowed = args.isHttpAllowed;
        this.isHttpsAllowed = args.isHttpsAllowed;
        if (lumirt.defaultIfComputed(args.location, "") === undefined) {
            throw new Error("Property argument 'location' is required, but was missing");
        }
        this.location = args.location;
        this.endpointName = args.endpointName;
        if (lumirt.defaultIfComputed(args.origin, "") === undefined) {
            throw new Error("Property argument 'origin' is required, but was missing");
        }
        this.origin = args.origin;
        this.originHostHeader = args.originHostHeader;
        this.originPath = args.originPath;
        if (lumirt.defaultIfComputed(args.profileName, "") === undefined) {
            throw new Error("Property argument 'profileName' is required, but was missing");
        }
        this.profileName = args.profileName;
        this.querystringCachingBehaviour = args.querystringCachingBehaviour;
        if (lumirt.defaultIfComputed(args.resourceGroupName, "") === undefined) {
            throw new Error("Property argument 'resourceGroupName' is required, but was missing");
        }
        this.resourceGroupName = args.resourceGroupName;
        this.tags = args.tags;
    }
}

export interface EndpointArgs {
    readonly contentTypesToCompress?: string[];
    readonly isCompressionEnabled?: boolean;
    readonly isHttpAllowed?: boolean;
    readonly isHttpsAllowed?: boolean;
    readonly location: string;
    readonly endpointName?: string;
    readonly origin: { hostName: string, httpPort: number, httpsPort: number, name: string }[];
    readonly originHostHeader?: string;
    readonly originPath?: string;
    readonly profileName: string;
    readonly querystringCachingBehaviour?: string;
    readonly resourceGroupName: string;
    readonly tags?: {[key: string]: any};
}
