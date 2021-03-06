// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Application Security Group.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = pulumi.output(azure.network.getApplicationSecurityGroup({
 *     name: "tf-appsecuritygroup",
 *     resourceGroupName: "my-resource-group",
 * }));
 * 
 * export const applicationSecurityGroupId = test.apply(test => test.id);
 * ```
 */
export function getApplicationSecurityGroup(args: GetApplicationSecurityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationSecurityGroupResult> {
    return pulumi.runtime.invoke("azure:network/getApplicationSecurityGroup:getApplicationSecurityGroup", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

/**
 * A collection of arguments for invoking getApplicationSecurityGroup.
 */
export interface GetApplicationSecurityGroupArgs {
    /**
     * The name of the Application Security Group.
     */
    readonly name: string;
    /**
     * The name of the resource group in which the Application Security Group exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getApplicationSecurityGroup.
 */
export interface GetApplicationSecurityGroupResult {
    /**
     * The supported Azure location where the Application Security Group exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {[key: string]: any};
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
