import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"

function App() {
  return (
    <>
      <div>
          <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
          <Badge variant="default |outline | secondary | destructive">Badge</Badge>
      </div>

    </>
  )
}

export default App
