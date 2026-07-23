# FIELD STATION

# Room Renderer

Version: 1.0

Status: Active

Construction Phase:
Observation Deck RC2 · Phase 01

---

## Purpose

The Room Renderer is the architectural engine used to construct every room in Field Station.

It does not know what room it is rendering.

It only provides the systems required to make architectural spaces believable.

Rooms supply content.

The engine supplies behavior.

---

# Responsibilities

The renderer coordinates six independent systems.

```
Clock
    ↓

Lighting
    ↓

Camera
    ↓

Materials
    ↓

Layers
    ↓

Room
```

Each system should remain modular.

No module should depend directly upon a specific room.

---

# Included Systems

## Room Renderer

Coordinates the entire rendering pipeline.

Responsible for:

• initialization

• render order

• update loop

• lifecycle

---

## Camera

Represents the visitor.

Responsibilities:

• eye height

• movement

• transitions

• orientation

The camera behaves like a person walking through a building.

Never like a webpage.

---

## Clock

Represents simulated time.

Future responsibilities include:

Morning

Afternoon

Golden Hour

Blue Hour

Night

Moon Phase

Season

Phenology

Astronomy

The Clock is the master timing system for Field Station.

---

## Lighting

Lighting responds to Clock.

Lighting influences:

Sunlight

Ambient light

Interior illumination

Cloud shadows

Moonlight

Light temperature

Lighting never belongs to individual rooms.

---

## Materials

Materials define appearance.

Examples:

White Oak

Walnut

Brass

Limestone

Glass

Leather

Canvas

Paper

Moss

Rooms reference materials.

They never define colors directly.

---

## Layers

Rendering order.

```
Background

Sky

Architecture

Landscape

Furniture

Scientific Objects

Living Systems

Atmosphere

Interaction

Overlay
```

Every room uses the same layer hierarchy.

---

# Design Rules

The engine should never know:

Observation Deck

Library

Laboratory

Collections

Herbarium

Observatory

Landscape

These are rooms.

Rooms use the engine.

The engine never uses rooms.

---

# Public API

Every room imports the engine through one entry point.

```javascript
import {

    RoomRenderer,
    Camera,
    Clock,
    Lighting,
    Materials,
    Layers

} from "../engine/room-renderer";
```

No room should import internal engine modules directly.

---

# Engineering Principles

Small modules.

Readable code.

Minimal dependencies.

Predictable behavior.

Architecture before appearance.

Performance before effects.

---

# Long-Term Vision

The Room Renderer should remain unchanged even as Field Station grows.

Future rooms should require little more than:

• room structure

• content

• behavior

Everything else belongs to the engine.

This document serves as the architectural contract for every room built within Field Station.