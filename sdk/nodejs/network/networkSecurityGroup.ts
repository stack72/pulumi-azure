// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a network security group that contains a list of network security rules.  Network security groups enable inbound or outbound traffic to be enabled or denied.
 * 
 * > **NOTE on Network Security Groups and Network Security Rules:** Terraform currently
 * provides both a standalone Network Security Rule resource, and allows for Network Security Rules to be defined in-line within the Network Security Group resource.
 * At this time you cannot use a Network Security Group with in-line Network Security Rules in conjunction with any Network Security Rule resources. Doing so will cause a conflict of rule settings and will overwrite rules.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "acceptanceTestResourceGroup1",
 * });
 * const testNetworkSecurityGroup = new azure.network.NetworkSecurityGroup("test", {
 *     location: testResourceGroup.location,
 *     name: "acceptanceTestSecurityGroup1",
 *     resourceGroupName: testResourceGroup.name,
 *     securityRules: [{
 *         access: "Allow",
 *         destinationAddressPrefix: "*",
 *         destinationPortRange: "*",
 *         direction: "Inbound",
 *         name: "test123",
 *         priority: 100,
 *         protocol: "Tcp",
 *         sourceAddressPrefix: "*",
 *         sourcePortRange: "*",
 *     }],
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * ```
 */
export class NetworkSecurityGroup extends pulumi.CustomResource {
    /**
     * Get an existing NetworkSecurityGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkSecurityGroupState, opts?: pulumi.CustomResourceOptions): NetworkSecurityGroup {
        return new NetworkSecurityGroup(name, <any>state, { ...opts, id: id });
    }

    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the network security group. Changing this forces a new resource to be created.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the network security group. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * One or more `security_rule` blocks as defined below.
     */
    public readonly securityRules: pulumi.Output<{ access: string, description?: string, destinationAddressPrefix?: string, destinationAddressPrefixes?: string[], destinationApplicationSecurityGroupIds?: string[], destinationPortRange?: string, destinationPortRanges?: string[], direction: string, name: string, priority: number, protocol: string, sourceAddressPrefix?: string, sourceAddressPrefixes?: string[], sourceApplicationSecurityGroupIds?: string[], sourcePortRange?: string, sourcePortRanges?: string[] }[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a NetworkSecurityGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkSecurityGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkSecurityGroupArgs | NetworkSecurityGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: NetworkSecurityGroupState = argsOrState as NetworkSecurityGroupState | undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["securityRules"] = state ? state.securityRules : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as NetworkSecurityGroupArgs | undefined;
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["securityRules"] = args ? args.securityRules : undefined;
            inputs["tags"] = args ? args.tags : undefined;
        }
        super("azure:network/networkSecurityGroup:NetworkSecurityGroup", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NetworkSecurityGroup resources.
 */
export interface NetworkSecurityGroupState {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the network security group. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the network security group. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * One or more `security_rule` blocks as defined below.
     */
    readonly securityRules?: pulumi.Input<pulumi.Input<{ access: pulumi.Input<string>, description?: pulumi.Input<string>, destinationAddressPrefix?: pulumi.Input<string>, destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>, destinationApplicationSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>, destinationPortRange?: pulumi.Input<string>, destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>, direction: pulumi.Input<string>, name: pulumi.Input<string>, priority: pulumi.Input<number>, protocol: pulumi.Input<string>, sourceAddressPrefix?: pulumi.Input<string>, sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>, sourceApplicationSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>, sourcePortRange?: pulumi.Input<string>, sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]> }>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a NetworkSecurityGroup resource.
 */
export interface NetworkSecurityGroupArgs {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Specifies the name of the network security group. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the network security group. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * One or more `security_rule` blocks as defined below.
     */
    readonly securityRules?: pulumi.Input<pulumi.Input<{ access: pulumi.Input<string>, description?: pulumi.Input<string>, destinationAddressPrefix?: pulumi.Input<string>, destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>, destinationApplicationSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>, destinationPortRange?: pulumi.Input<string>, destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>, direction: pulumi.Input<string>, name: pulumi.Input<string>, priority: pulumi.Input<number>, protocol: pulumi.Input<string>, sourceAddressPrefix?: pulumi.Input<string>, sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>, sourceApplicationSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>, sourcePortRange?: pulumi.Input<string>, sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]> }>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
