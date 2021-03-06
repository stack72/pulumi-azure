// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Service Principal associated with an Application within Azure Active Directory.
 * 
 * > **NOTE:** The Azure Active Directory resources have been split out into [a new AzureAD Provider](http://terraform.io/docs/providers/azuread/index.html) - as such the AzureAD resources within the AzureRM Provider are deprecated and will be removed in the next major version (2.0). Information on how to migrate from the existing resources to the new AzureAD Provider can be found here.
 * 
 * > **NOTE:** If you're authenticating using a Service Principal then it must have permissions to both `Read and write all applications` and `Sign in and read user profile` within the `Windows Azure Active Directory` API.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testApplication = new azure.ad.Application("test", {
 *     availableToOtherTenants: false,
 *     homepage: "http://homepage",
 *     identifierUris: ["http://uri"],
 *     name: "example",
 *     oauth2AllowImplicitFlow: true,
 *     replyUrls: ["http://replyurl"],
 * });
 * const testServicePrincipal = new azure.ad.ServicePrincipal("test", {
 *     applicationId: testApplication.applicationId,
 * });
 * ```
 */
export class ServicePrincipal extends pulumi.CustomResource {
    /**
     * Get an existing ServicePrincipal resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServicePrincipalState, opts?: pulumi.CustomResourceOptions): ServicePrincipal {
        return new ServicePrincipal(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ID of the Azure AD Application for which to create a Service Principal.
     */
    public readonly applicationId: pulumi.Output<string>;
    /**
     * The Display Name of the Azure Active Directory Application associated with this Service Principal.
     */
    public /*out*/ readonly displayName: pulumi.Output<string>;

    /**
     * Create a ServicePrincipal resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServicePrincipalArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServicePrincipalArgs | ServicePrincipalState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ServicePrincipalState = argsOrState as ServicePrincipalState | undefined;
            inputs["applicationId"] = state ? state.applicationId : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
        } else {
            const args = argsOrState as ServicePrincipalArgs | undefined;
            if (!args || args.applicationId === undefined) {
                throw new Error("Missing required property 'applicationId'");
            }
            inputs["applicationId"] = args ? args.applicationId : undefined;
            inputs["displayName"] = undefined /*out*/;
        }
        super("azure:ad/servicePrincipal:ServicePrincipal", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ServicePrincipal resources.
 */
export interface ServicePrincipalState {
    /**
     * The ID of the Azure AD Application for which to create a Service Principal.
     */
    readonly applicationId?: pulumi.Input<string>;
    /**
     * The Display Name of the Azure Active Directory Application associated with this Service Principal.
     */
    readonly displayName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ServicePrincipal resource.
 */
export interface ServicePrincipalArgs {
    /**
     * The ID of the Azure AD Application for which to create a Service Principal.
     */
    readonly applicationId: pulumi.Input<string>;
}
