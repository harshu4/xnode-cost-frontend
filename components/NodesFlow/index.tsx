/* eslint-disable dot-notation */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
'use client'
// import { useState } from 'react'
import {
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
  FC,
  useContext,
} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AccountContext } from '@/contexts/AccountContext'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow'
import 'reactflow/dist/style.css'
import {
  nodes as initialNodes,
  edges as initialEdges,
} from './initial-elements'
import CustomNode from './CustomNode'

import './overview.css'
import ServerNode from './ServerNode'
import APINode from './APINode'
import DataNode from './DataNode'
import UtilityNode from './UtilityNode'
import RPCNode from './RPCNode'
import AnalyticsNode from './AnalyticsNode'

const nodeTypes = {
  custom: CustomNode,
  server: ServerNode,
  api: APINode,
  data: DataNode,
  utility: UtilityNode,
  rpc: RPCNode,
  analytics: AnalyticsNode,
}

const minimapStyle = {
  height: 120,
}

const onInit = (reactFlowInstance) =>
  console.log('flow loaded:', reactFlowInstance)

const NodesFlow = () => {
  const {
    selectionSideNavBar,
    setSelectionSideNavBar,
    next,
    setNext,
    changeNodes,
  } = useContext(AccountContext)
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: '#000' } }, eds),
      ),
    [],
  )

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === 'custom').data
        .selects[edge.sourceHandle]
      edge.type = edgeType
    }

    return edge
  })

  useEffect(() => {
    console.log('bib bop detectei uma falha no siste')
    console.log(changeNodes)

    if (changeNodes?.type === 'api') {
      const nodeExists = nodes.some(
        (node) => node.data.name === changeNodes?.name,
      )
      console.log(nodes)
      if (!nodeExists) {
        const newNode = {
          id: uuidv4(),
          type: 'api',
          position: { x: 670, y: 550 },
          data: {
            selects: {
              'handle-0': 'smoothstep',
              'handle-1': 'smoothstep',
            },
            name: changeNodes?.name,
          },
        }
        setNodes((prevNodes) => [...prevNodes, newNode])
      }
    }

    if (changeNodes?.type === 'rpc') {
      const nodeExists = nodes.some(
        (node) => node.data.name === changeNodes?.name,
      )
      console.log(nodes)
      if (!nodeExists) {
        const newNode = {
          id: uuidv4(),
          type: 'rpc',
          position: { x: 670, y: 500 },
          data: {
            selects: {
              'handle-0': 'smoothstep',
              'handle-1': 'smoothstep',
            },
            name: changeNodes?.name,
            icon: changeNodes?.icon,
          },
        }
        setNodes((prevNodes) => [...prevNodes, newNode])
      }
    }

    if (changeNodes?.type === 'analytics') {
      const nodeExists = nodes.some(
        (node) => node.data.name === changeNodes?.name,
      )
      console.log(nodes)
      if (!nodeExists) {
        const newNode = {
          id: uuidv4(),
          type: 'analytics',
          position: { x: 670, y: 500 },
          data: {
            selects: {
              'handle-0': 'smoothstep',
              'handle-1': 'smoothstep',
            },
            name: changeNodes?.name,
            icon: changeNodes?.icon,
          },
        }
        setNodes((prevNodes) => [...prevNodes, newNode])
      }
    }

    if (changeNodes?.type === 'utility') {
      const nodeExists = nodes.some(
        (node) => node.data.name === changeNodes?.name,
      )
      console.log(nodes)
      if (!nodeExists) {
        const newNode = {
          id: uuidv4(),
          type: 'utility',
          position: { x: 670, y: 500 },
          data: {
            selects: {
              'handle-0': 'smoothstep',
              'handle-1': 'smoothstep',
            },
            title: changeNodes?.title,
            name: changeNodes?.name,
            icon: changeNodes?.icon,
          },
        }
        setNodes((prevNodes) => [...prevNodes, newNode])
      }
    }
  }, [changeNodes])

  return (
    <div className="h-[1500px]">
      <ReactFlow
        nodes={nodes}
        edges={edgesWithUpdatedTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
      >
        <MiniMap style={minimapStyle} zoomable pannable />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  )
}

export default NodesFlow
