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
import {
  nodes as initialNodesScratch,
  edges as initialEdgesScratch,
} from './initial-elements-fromscratch'
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
interface ModalProps {
  fromScratch: boolean
}

const onInit = (reactFlowInstance) =>
  console.log('flow loaded:', reactFlowInstance)

const NodesFlow = ({ ...dataM }: ModalProps) => {
  const {
    selectionSideNavBar,
    setSelectionSideNavBar,
    next,
    setNext,
    changeNodes,
    setFinalNodes,
    finalNodes,
  } = useContext(AccountContext)
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(
    !dataM.fromScratch ? initialNodes : initialNodesScratch,
  )
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    !dataM.fromScratch ? initialEdges : initialEdgesScratch,
  )
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
      const edgeType = nodes.find((node) => node.type === 'server').data
        .selects[edge.sourceHandle]
      edge.type = edgeType
    }

    return edge
  })

  useEffect(() => {
    console.log('bib bop entrei')
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
    if (changeNodes?.type === 'data') {
      console.log('entrei no data')
      const existingNodeIndex = nodes.findIndex(
        (node) =>
          node.type === 'data' && node.data.lists && node.data.lists.length > 0,
      )

      if (existingNodeIndex !== -1) {
        console.log('node existe')
        // O nó 'data' já existe, então vamos adicionar o novo objeto a ele
        // antes verificar se nao existe o title, se existir nao prosseguimos
        const existingNode = nodes[existingNodeIndex]

        const existsTitle = existingNode.data.lists.some(
          (data) => data.title === changeNodes?.name,
        )

        if (existsTitle) {
          return
        }

        existingNode.data.lists.push({
          icon: changeNodes?.icon,
          title: changeNodes?.name,
        })

        // Atualize o array de nós
        const updatedNodes = [...nodes]
        updatedNodes[existingNodeIndex] = existingNode
        console.log('o updated node')
        console.log(existingNode)
        setNodes((nds) =>
          nds.map((node) => {
            if (node.type === 'data') {
              // when you update a simple type you can just update the value
              node.data = {
                ...node.data,
                lists: existingNode.data.lists,
              }
            }

            return node
          }),
        )
      } else {
        console.log('node nao existe, vamos criar um')
        // O nó 'data' não existe, então vamos criar um novo nó
        const newNode = {
          id: uuidv4(),
          type: 'data',
          position: { x: 670, y: 500 },
          data: {
            selects: {
              'handle-0': 'smoothstep',
              'handle-1': 'smoothstep',
            },
            lists: [
              {
                title: changeNodes?.name,
                icon: changeNodes?.icon,
              },
            ],
          },
        }
        setNodes((prevNodes) => [...prevNodes, newNode])
      }
    }
    if (changeNodes?.type === 'server') {
      const nodeExists = nodes.some((node) => node.type === 'server')
      console.log(nodes)
      if (!nodeExists) {
        console.log('vou inputar o server')
        console.log(changeNodes?.defaultValueServerType)
        console.log(changeNodes?.defaultValueLocation)
        const newNode = {
          id: uuidv4(),
          type: 'server',
          position: { x: 670, y: 500 },
          data: {
            selects: {
              'handle-0': 'smoothstep',
              'handle-1': 'smoothstep',
            },
            defaultValueServerType: changeNodes?.defaultValueServerType,
            defaultValueLocation: changeNodes?.defaultValueLocation,
          },
        }
        setNodes((prevNodes) => [...prevNodes, newNode])
      }
    }
  }, [changeNodes])

  useEffect(() => {
    setFinalNodes(nodes)
  }, [nodes])

  return (
    <div className="relative h-[1500px] w-[750px] md:w-[900px] lg:w-[1050px] xl:w-[1200px] 2xl:w-[1500px]">
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
        <div className="absolute right-0 top-[75px] md:top-[90px] lg:top-[105px] xl:top-[120px] 2xl:top-[150px]">
          <MiniMap style={minimapStyle} zoomable pannable />
        </div>
        <div className="absolute top-[80px] left-[25px] md:top-[96px] md:left-[30px] lg:top-[112px] lg:left-[35px] xl:top-[128px] xl:left-[40px] 2xl:top-[160px] 2xl:left-[50px]">
          <Controls />
        </div>
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  )
}

export default NodesFlow
