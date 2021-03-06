// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package policy

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a policy set definition. 
// 
// > **NOTE:**  Policy set definitions (also known as policy initiatives) do not take effect until they are assigned to a scope using a Policy Set Assignment.
type PolicySetDefinition struct {
	s *pulumi.ResourceState
}

// NewPolicySetDefinition registers a new resource with the given unique name, arguments, and options.
func NewPolicySetDefinition(ctx *pulumi.Context,
	name string, args *PolicySetDefinitionArgs, opts ...pulumi.ResourceOpt) (*PolicySetDefinition, error) {
	if args == nil || args.DisplayName == nil {
		return nil, errors.New("missing required argument 'DisplayName'")
	}
	if args == nil || args.PolicyType == nil {
		return nil, errors.New("missing required argument 'PolicyType'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["description"] = nil
		inputs["displayName"] = nil
		inputs["managementGroupId"] = nil
		inputs["metadata"] = nil
		inputs["name"] = nil
		inputs["parameters"] = nil
		inputs["policyDefinitions"] = nil
		inputs["policyType"] = nil
	} else {
		inputs["description"] = args.Description
		inputs["displayName"] = args.DisplayName
		inputs["managementGroupId"] = args.ManagementGroupId
		inputs["metadata"] = args.Metadata
		inputs["name"] = args.Name
		inputs["parameters"] = args.Parameters
		inputs["policyDefinitions"] = args.PolicyDefinitions
		inputs["policyType"] = args.PolicyType
	}
	s, err := ctx.RegisterResource("azure:policy/policySetDefinition:PolicySetDefinition", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PolicySetDefinition{s: s}, nil
}

// GetPolicySetDefinition gets an existing PolicySetDefinition resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPolicySetDefinition(ctx *pulumi.Context,
	name string, id pulumi.ID, state *PolicySetDefinitionState, opts ...pulumi.ResourceOpt) (*PolicySetDefinition, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["description"] = state.Description
		inputs["displayName"] = state.DisplayName
		inputs["managementGroupId"] = state.ManagementGroupId
		inputs["metadata"] = state.Metadata
		inputs["name"] = state.Name
		inputs["parameters"] = state.Parameters
		inputs["policyDefinitions"] = state.PolicyDefinitions
		inputs["policyType"] = state.PolicyType
	}
	s, err := ctx.ReadResource("azure:policy/policySetDefinition:PolicySetDefinition", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PolicySetDefinition{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *PolicySetDefinition) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *PolicySetDefinition) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The description of the policy set definition.
func (r *PolicySetDefinition) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// The display name of the policy set definition.
func (r *PolicySetDefinition) DisplayName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["displayName"])
}

// The ID of the Management Group where this policy should be defined. Changing this forces a new resource to be created.
func (r *PolicySetDefinition) ManagementGroupId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["managementGroupId"])
}

// The metadata for the policy set definition. This is a json object representing additional metadata that should be stored with the policy definition.
func (r *PolicySetDefinition) Metadata() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["metadata"])
}

// The name of the policy set definition. Changing this forces a new resource to be created.
func (r *PolicySetDefinition) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Parameters for the policy set definition. This field is a json object that allows you to parameterize your policy definition.
func (r *PolicySetDefinition) Parameters() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["parameters"])
}

// The policy definitions for the policy set definition. This is a json object representing the bundled policy definitions .
func (r *PolicySetDefinition) PolicyDefinitions() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["policyDefinitions"])
}

// The policy set type. Possible values are `BuiltIn` or `Custom`. Changing this forces a new resource to be created.
func (r *PolicySetDefinition) PolicyType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["policyType"])
}

// Input properties used for looking up and filtering PolicySetDefinition resources.
type PolicySetDefinitionState struct {
	// The description of the policy set definition.
	Description interface{}
	// The display name of the policy set definition.
	DisplayName interface{}
	// The ID of the Management Group where this policy should be defined. Changing this forces a new resource to be created.
	ManagementGroupId interface{}
	// The metadata for the policy set definition. This is a json object representing additional metadata that should be stored with the policy definition.
	Metadata interface{}
	// The name of the policy set definition. Changing this forces a new resource to be created.
	Name interface{}
	// Parameters for the policy set definition. This field is a json object that allows you to parameterize your policy definition.
	Parameters interface{}
	// The policy definitions for the policy set definition. This is a json object representing the bundled policy definitions .
	PolicyDefinitions interface{}
	// The policy set type. Possible values are `BuiltIn` or `Custom`. Changing this forces a new resource to be created.
	PolicyType interface{}
}

// The set of arguments for constructing a PolicySetDefinition resource.
type PolicySetDefinitionArgs struct {
	// The description of the policy set definition.
	Description interface{}
	// The display name of the policy set definition.
	DisplayName interface{}
	// The ID of the Management Group where this policy should be defined. Changing this forces a new resource to be created.
	ManagementGroupId interface{}
	// The metadata for the policy set definition. This is a json object representing additional metadata that should be stored with the policy definition.
	Metadata interface{}
	// The name of the policy set definition. Changing this forces a new resource to be created.
	Name interface{}
	// Parameters for the policy set definition. This field is a json object that allows you to parameterize your policy definition.
	Parameters interface{}
	// The policy definitions for the policy set definition. This is a json object representing the bundled policy definitions .
	PolicyDefinitions interface{}
	// The policy set type. Possible values are `BuiltIn` or `Custom`. Changing this forces a new resource to be created.
	PolicyType interface{}
}
