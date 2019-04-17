// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package batch

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing Batch Account.
func LookupAccount(ctx *pulumi.Context, args *GetAccountArgs) (*GetAccountResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:batch/getAccount:getAccount", inputs)
	if err != nil {
		return nil, err
	}
	return &GetAccountResult{
		AccountEndpoint: outputs["accountEndpoint"],
		Location: outputs["location"],
		Name: outputs["name"],
		PoolAllocationMode: outputs["poolAllocationMode"],
		PrimaryAccessKey: outputs["primaryAccessKey"],
		ResourceGroupName: outputs["resourceGroupName"],
		SecondaryAccessKey: outputs["secondaryAccessKey"],
		StorageAccountId: outputs["storageAccountId"],
		Tags: outputs["tags"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getAccount.
type GetAccountArgs struct {
	// The name of the Batch account.
	Name interface{}
	// The Name of the Resource Group where this Batch account exists.
	ResourceGroupName interface{}
}

// A collection of values returned by getAccount.
type GetAccountResult struct {
	// The account endpoint used to interact with the Batch service.
	AccountEndpoint interface{}
	// The Azure Region in which this Batch account exists.
	Location interface{}
	// The Batch account name.
	Name interface{}
	// The pool allocation mode configured for this Batch account.
	PoolAllocationMode interface{}
	// The Batch account primary access key.
	PrimaryAccessKey interface{}
	ResourceGroupName interface{}
	// The Batch account secondary access key.
	SecondaryAccessKey interface{}
	// The ID of the Storage Account used for this Batch account.
	StorageAccountId interface{}
	// A map of tags assigned to the Batch account.
	Tags interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}