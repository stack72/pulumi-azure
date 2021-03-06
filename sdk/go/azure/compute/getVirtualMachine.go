// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package compute

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing Virtual Machine.
func LookupVirtualMachine(ctx *pulumi.Context, args *GetVirtualMachineArgs) (*GetVirtualMachineResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:compute/getVirtualMachine:getVirtualMachine", inputs)
	if err != nil {
		return nil, err
	}
	return &GetVirtualMachineResult{
		Name: outputs["name"],
		ResourceGroupName: outputs["resourceGroupName"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getVirtualMachine.
type GetVirtualMachineArgs struct {
	// Specifies the name of the Virtual Machine.
	Name interface{}
	// Specifies the name of the resource group the Virtual Machine is located in.
	ResourceGroupName interface{}
}

// A collection of values returned by getVirtualMachine.
type GetVirtualMachineResult struct {
	Name interface{}
	ResourceGroupName interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
