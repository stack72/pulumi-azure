// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package iot

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Consumer Group within an IotHub
type ConsumerGroup struct {
	s *pulumi.ResourceState
}

// NewConsumerGroup registers a new resource with the given unique name, arguments, and options.
func NewConsumerGroup(ctx *pulumi.Context,
	name string, args *ConsumerGroupArgs, opts ...pulumi.ResourceOpt) (*ConsumerGroup, error) {
	if args == nil || args.EventhubEndpointName == nil {
		return nil, errors.New("missing required argument 'EventhubEndpointName'")
	}
	if args == nil || args.IothubName == nil {
		return nil, errors.New("missing required argument 'IothubName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["eventhubEndpointName"] = nil
		inputs["iothubName"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
	} else {
		inputs["eventhubEndpointName"] = args.EventhubEndpointName
		inputs["iothubName"] = args.IothubName
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	s, err := ctx.RegisterResource("azure:iot/consumerGroup:ConsumerGroup", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ConsumerGroup{s: s}, nil
}

// GetConsumerGroup gets an existing ConsumerGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetConsumerGroup(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ConsumerGroupState, opts ...pulumi.ResourceOpt) (*ConsumerGroup, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["eventhubEndpointName"] = state.EventhubEndpointName
		inputs["iothubName"] = state.IothubName
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
	}
	s, err := ctx.ReadResource("azure:iot/consumerGroup:ConsumerGroup", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ConsumerGroup{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *ConsumerGroup) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *ConsumerGroup) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The name of the Event Hub-compatible endpoint in the IoT hub. Changing this forces a new resource to be created.
func (r *ConsumerGroup) EventhubEndpointName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["eventhubEndpointName"])
}

// The name of the IoT Hub. Changing this forces a new resource to be created.
func (r *ConsumerGroup) IothubName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["iothubName"])
}

// The name of this Consumer Group. Changing this forces a new resource to be created.
func (r *ConsumerGroup) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The name of the resource group that contains the IoT hub. Changing this forces a new resource to be created.
func (r *ConsumerGroup) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// Input properties used for looking up and filtering ConsumerGroup resources.
type ConsumerGroupState struct {
	// The name of the Event Hub-compatible endpoint in the IoT hub. Changing this forces a new resource to be created.
	EventhubEndpointName interface{}
	// The name of the IoT Hub. Changing this forces a new resource to be created.
	IothubName interface{}
	// The name of this Consumer Group. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group that contains the IoT hub. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}

// The set of arguments for constructing a ConsumerGroup resource.
type ConsumerGroupArgs struct {
	// The name of the Event Hub-compatible endpoint in the IoT hub. Changing this forces a new resource to be created.
	EventhubEndpointName interface{}
	// The name of the IoT Hub. Changing this forces a new resource to be created.
	IothubName interface{}
	// The name of this Consumer Group. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group that contains the IoT hub. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}
