// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Metric Alert within Azure Monitor.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const azurerm_resource_group_main = new azure.core.ResourceGroup("main", {
 *     location: "West US",
 *     name: "example-resources",
 * });
 * const azurerm_monitor_action_group_main = new azure.monitoring.ActionGroup("main", {
 *     name: "example-actiongroup",
 *     resourceGroupName: azurerm_resource_group_main.name,
 *     shortName: "exampleact",
 *     webhookReceivers: [{
 *         name: "callmyapi",
 *         serviceUri: "http://example.com/alert",
 *     }],
 * });
 * const azurerm_storage_account_to_monitor = new azure.storage.Account("to_monitor", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: azurerm_resource_group_main.location,
 *     name: "examplestorageaccount",
 *     resourceGroupName: azurerm_resource_group_main.name,
 * });
 * const azurerm_monitor_metric_alert_test = new azure.monitoring.MetricAlert("test", {
 *     actions: [{
 *         actionGroupId: azurerm_monitor_action_group_main.id,
 *     }],
 *     criterias: [{
 *         aggregation: "Total",
 *         dimensions: [{
 *             name: "ApiName",
 *             operator: "Include",
 *             values: ["*"],
 *         }],
 *         metricName: "Transactions",
 *         metricNamespace: "Microsoft.Storage/storageAccounts",
 *         operator: "GreaterThan",
 *         threshold: 50,
 *     }],
 *     description: "Action will be triggered when Transactions count is greater than 50.",
 *     name: "example-metricalert",
 *     resourceGroupName: azurerm_resource_group_main.name,
 *     scopes: azurerm_storage_account_to_monitor.id,
 * });
 * ```
 */
export class MetricAlert extends pulumi.CustomResource {
    /**
     * Get an existing MetricAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MetricAlertState, opts?: pulumi.CustomResourceOptions): MetricAlert {
        return new MetricAlert(name, <any>state, { ...opts, id: id });
    }

    /**
     * One or more `action` blocks as defined below.
     */
    public readonly actions: pulumi.Output<{ actionGroupId: string, webhookProperties?: {[key: string]: string} }[] | undefined>;
    /**
     * Should the alerts in this Metric Alert be auto resolved? Defaults to `false`.
     */
    public readonly autoMitigate: pulumi.Output<boolean | undefined>;
    /**
     * One or more `criteria` blocks as defined below.
     */
    public readonly criterias: pulumi.Output<{ aggregation: string, dimensions?: { name: string, operator: string, values: string[] }[], metricName: string, metricNamespace: string, operator: string, threshold: number }[]>;
    /**
     * The description of this Metric Alert.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * Should this Metric Alert be enabled? Defaults to `true`.
     */
    public readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The evaluation frequency of this Metric Alert, represented in ISO 8601 duration format. Possible values are `PT1M`, `PT5M`, `PT15M`, `PT30M` and `PT1H`. Defaults to `PT1M`.
     */
    public readonly frequency: pulumi.Output<string | undefined>;
    /**
     * The name of the Metric Alert. Changing this forces a new resource to be created.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Metric Alert instance.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The resource ID at which the metric criteria should be applied.
     */
    public readonly scopes: pulumi.Output<string>;
    /**
     * The severity of this Metric Alert. Possible values are `0`, `1`, `2`, `3` and `4`. Defaults to `3`.
     */
    public readonly severity: pulumi.Output<number | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;
    /**
     * The period of time that is used to monitor alert activity, represented in ISO 8601 duration format. This value must be greater than `frequency`. Possible values are `PT1M`, `PT5M`, `PT15M`, `PT30M`, `PT1H`, `PT6H`, `PT12H` and `P1D`. Defaults to `PT5M`.
     */
    public readonly windowSize: pulumi.Output<string | undefined>;

    /**
     * Create a MetricAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetricAlertArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MetricAlertArgs | MetricAlertState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: MetricAlertState = argsOrState as MetricAlertState | undefined;
            inputs["actions"] = state ? state.actions : undefined;
            inputs["autoMitigate"] = state ? state.autoMitigate : undefined;
            inputs["criterias"] = state ? state.criterias : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["frequency"] = state ? state.frequency : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["scopes"] = state ? state.scopes : undefined;
            inputs["severity"] = state ? state.severity : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["windowSize"] = state ? state.windowSize : undefined;
        } else {
            const args = argsOrState as MetricAlertArgs | undefined;
            if (!args || args.criterias === undefined) {
                throw new Error("Missing required property 'criterias'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.scopes === undefined) {
                throw new Error("Missing required property 'scopes'");
            }
            inputs["actions"] = args ? args.actions : undefined;
            inputs["autoMitigate"] = args ? args.autoMitigate : undefined;
            inputs["criterias"] = args ? args.criterias : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["frequency"] = args ? args.frequency : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["scopes"] = args ? args.scopes : undefined;
            inputs["severity"] = args ? args.severity : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["windowSize"] = args ? args.windowSize : undefined;
        }
        super("azure:monitoring/metricAlert:MetricAlert", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering MetricAlert resources.
 */
export interface MetricAlertState {
    /**
     * One or more `action` blocks as defined below.
     */
    readonly actions?: pulumi.Input<pulumi.Input<{ actionGroupId: pulumi.Input<string>, webhookProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}> }>[]>;
    /**
     * Should the alerts in this Metric Alert be auto resolved? Defaults to `false`.
     */
    readonly autoMitigate?: pulumi.Input<boolean>;
    /**
     * One or more `criteria` blocks as defined below.
     */
    readonly criterias?: pulumi.Input<pulumi.Input<{ aggregation: pulumi.Input<string>, dimensions?: pulumi.Input<pulumi.Input<{ name: pulumi.Input<string>, operator: pulumi.Input<string>, values: pulumi.Input<pulumi.Input<string>[]> }>[]>, metricName: pulumi.Input<string>, metricNamespace: pulumi.Input<string>, operator: pulumi.Input<string>, threshold: pulumi.Input<number> }>[]>;
    /**
     * The description of this Metric Alert.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Should this Metric Alert be enabled? Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * The evaluation frequency of this Metric Alert, represented in ISO 8601 duration format. Possible values are `PT1M`, `PT5M`, `PT15M`, `PT30M` and `PT1H`. Defaults to `PT1M`.
     */
    readonly frequency?: pulumi.Input<string>;
    /**
     * The name of the Metric Alert. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Metric Alert instance.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The resource ID at which the metric criteria should be applied.
     */
    readonly scopes?: pulumi.Input<string>;
    /**
     * The severity of this Metric Alert. Possible values are `0`, `1`, `2`, `3` and `4`. Defaults to `3`.
     */
    readonly severity?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The period of time that is used to monitor alert activity, represented in ISO 8601 duration format. This value must be greater than `frequency`. Possible values are `PT1M`, `PT5M`, `PT15M`, `PT30M`, `PT1H`, `PT6H`, `PT12H` and `P1D`. Defaults to `PT5M`.
     */
    readonly windowSize?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MetricAlert resource.
 */
export interface MetricAlertArgs {
    /**
     * One or more `action` blocks as defined below.
     */
    readonly actions?: pulumi.Input<pulumi.Input<{ actionGroupId: pulumi.Input<string>, webhookProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}> }>[]>;
    /**
     * Should the alerts in this Metric Alert be auto resolved? Defaults to `false`.
     */
    readonly autoMitigate?: pulumi.Input<boolean>;
    /**
     * One or more `criteria` blocks as defined below.
     */
    readonly criterias: pulumi.Input<pulumi.Input<{ aggregation: pulumi.Input<string>, dimensions?: pulumi.Input<pulumi.Input<{ name: pulumi.Input<string>, operator: pulumi.Input<string>, values: pulumi.Input<pulumi.Input<string>[]> }>[]>, metricName: pulumi.Input<string>, metricNamespace: pulumi.Input<string>, operator: pulumi.Input<string>, threshold: pulumi.Input<number> }>[]>;
    /**
     * The description of this Metric Alert.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Should this Metric Alert be enabled? Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * The evaluation frequency of this Metric Alert, represented in ISO 8601 duration format. Possible values are `PT1M`, `PT5M`, `PT15M`, `PT30M` and `PT1H`. Defaults to `PT1M`.
     */
    readonly frequency?: pulumi.Input<string>;
    /**
     * The name of the Metric Alert. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Metric Alert instance.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource ID at which the metric criteria should be applied.
     */
    readonly scopes: pulumi.Input<string>;
    /**
     * The severity of this Metric Alert. Possible values are `0`, `1`, `2`, `3` and `4`. Defaults to `3`.
     */
    readonly severity?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The period of time that is used to monitor alert activity, represented in ISO 8601 duration format. This value must be greater than `frequency`. Possible values are `PT1M`, `PT5M`, `PT15M`, `PT30M`, `PT1H`, `PT6H`, `PT12H` and `P1D`. Defaults to `PT5M`.
     */
    readonly windowSize?: pulumi.Input<string>;
}
