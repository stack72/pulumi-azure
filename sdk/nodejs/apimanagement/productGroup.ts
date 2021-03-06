// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an API Management Product Assignment to a Group.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleService = pulumi.output(azure.apimanagement.getService({
 *     name: "example-api",
 *     resourceGroupName: "example-resources",
 * }));
 * const exampleGroup = pulumi.all([exampleService, exampleService]).apply(([exampleService, exampleService1]) => azure.apimanagement.getGroup({
 *     apiManagementName: exampleService.name,
 *     name: "my-group",
 *     resourceGroupName: exampleService1.resourceGroupName,
 * }));
 * const exampleProductGroup = new azure.apimanagement.ProductGroup("example", {
 *     apiManagementName: exampleService.apply(exampleService => exampleService.name),
 *     groupName: exampleGroup.apply(exampleGroup => exampleGroup.name),
 *     productId: azurerm_api_management_user_example.id.apply(id => id),
 *     resourceGroupName: exampleService.apply(exampleService => exampleService.resourceGroupName),
 * });
 * const exampleProduct = pulumi.all([exampleService, exampleService]).apply(([exampleService, exampleService1]) => azure.apimanagement.getProduct({
 *     apiManagementName: exampleService.name,
 *     productId: "my-product",
 *     resourceGroupName: exampleService1.resourceGroupName,
 * }));
 * ```
 */
export class ProductGroup extends pulumi.CustomResource {
    /**
     * Get an existing ProductGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProductGroupState, opts?: pulumi.CustomResourceOptions): ProductGroup {
        return new ProductGroup(name, <any>state, { ...opts, id: id });
    }

    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    public readonly apiManagementName: pulumi.Output<string>;
    /**
     * The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
     */
    public readonly groupName: pulumi.Output<string>;
    /**
     * The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
     */
    public readonly productId: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName: pulumi.Output<string>;

    /**
     * Create a ProductGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProductGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProductGroupArgs | ProductGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ProductGroupState = argsOrState as ProductGroupState | undefined;
            inputs["apiManagementName"] = state ? state.apiManagementName : undefined;
            inputs["groupName"] = state ? state.groupName : undefined;
            inputs["productId"] = state ? state.productId : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
        } else {
            const args = argsOrState as ProductGroupArgs | undefined;
            if (!args || args.apiManagementName === undefined) {
                throw new Error("Missing required property 'apiManagementName'");
            }
            if (!args || args.groupName === undefined) {
                throw new Error("Missing required property 'groupName'");
            }
            if (!args || args.productId === undefined) {
                throw new Error("Missing required property 'productId'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["apiManagementName"] = args ? args.apiManagementName : undefined;
            inputs["groupName"] = args ? args.groupName : undefined;
            inputs["productId"] = args ? args.productId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
        }
        super("azure:apimanagement/productGroup:ProductGroup", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ProductGroup resources.
 */
export interface ProductGroupState {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    readonly apiManagementName?: pulumi.Input<string>;
    /**
     * The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly groupName?: pulumi.Input<string>;
    /**
     * The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly productId?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ProductGroup resource.
 */
export interface ProductGroupArgs {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Input<string>;
    /**
     * The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly groupName: pulumi.Input<string>;
    /**
     * The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly productId: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
