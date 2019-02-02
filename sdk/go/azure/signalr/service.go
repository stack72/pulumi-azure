// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package signalr

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages an Azure SignalR service.
type Service struct {
	s *pulumi.ResourceState
}

// NewService registers a new resource with the given unique name, arguments, and options.
func NewService(ctx *pulumi.Context,
	name string, args *ServiceArgs, opts ...pulumi.ResourceOpt) (*Service, error) {
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Sku == nil {
		return nil, errors.New("missing required argument 'Sku'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["sku"] = nil
		inputs["tags"] = nil
	} else {
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["sku"] = args.Sku
		inputs["tags"] = args.Tags
	}
	inputs["hostname"] = nil
	inputs["ipAddress"] = nil
	inputs["publicPort"] = nil
	inputs["serverPort"] = nil
	s, err := ctx.RegisterResource("azure:signalr/service:Service", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Service{s: s}, nil
}

// GetService gets an existing Service resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetService(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ServiceState, opts ...pulumi.ResourceOpt) (*Service, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["hostname"] = state.Hostname
		inputs["ipAddress"] = state.IpAddress
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["publicPort"] = state.PublicPort
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["serverPort"] = state.ServerPort
		inputs["sku"] = state.Sku
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:signalr/service:Service", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Service{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Service) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Service) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The FQDN of the SignalR service.
func (r *Service) Hostname() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["hostname"])
}

// The publicly accessible IP of the SignalR service.
func (r *Service) IpAddress() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["ipAddress"])
}

// Specifies the supported Azure location where the SignalR service exists. Changing this forces a new resource to be created.
func (r *Service) Location() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["location"])
}

// The name of the SignalR service. Changing this forces a new resource to be created.
func (r *Service) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The publicly accessible port of the SignalR service which is designed for browser/client use.
func (r *Service) PublicPort() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["publicPort"])
}

// The name of the resource group in which to create the SignalR service. Changing this forces a new resource to be created.
func (r *Service) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// The publicly accessible port of the SignalR service which is designed for customer server side use.
func (r *Service) ServerPort() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["serverPort"])
}

// A `sku` block as documented below.
func (r *Service) Sku() *pulumi.Output {
	return r.s.State["sku"]
}

// A mapping of tags to assign to the resource.
func (r *Service) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Service resources.
type ServiceState struct {
	// The FQDN of the SignalR service.
	Hostname interface{}
	// The publicly accessible IP of the SignalR service.
	IpAddress interface{}
	// Specifies the supported Azure location where the SignalR service exists. Changing this forces a new resource to be created.
	Location interface{}
	// The name of the SignalR service. Changing this forces a new resource to be created.
	Name interface{}
	// The publicly accessible port of the SignalR service which is designed for browser/client use.
	PublicPort interface{}
	// The name of the resource group in which to create the SignalR service. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The publicly accessible port of the SignalR service which is designed for customer server side use.
	ServerPort interface{}
	// A `sku` block as documented below.
	Sku interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Service resource.
type ServiceArgs struct {
	// Specifies the supported Azure location where the SignalR service exists. Changing this forces a new resource to be created.
	Location interface{}
	// The name of the SignalR service. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which to create the SignalR service. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `sku` block as documented below.
	Sku interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
