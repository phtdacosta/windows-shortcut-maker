option explicit

dim strFilepath, strFilename, strLinkArgs, strLinkDes, strLinkCwd, strLinkIco, strLinkWin, strLinkHtk
strFilepath = Wscript.Arguments(0)
strFilename = Wscript.Arguments(1)
strLinkArgs = Wscript.Arguments(2)
strLinkDes = Wscript.Arguments(3)
strLinkCwd = Wscript.Arguments(4)
strLinkIco = Wscript.Arguments(5)
strLinkWin = Wscript.Arguments(6)
strLinkHtk = Wscript.Arguments(7)

sub FileToLnk()
  dim objShell, strDesktopPath, objLink
  set objShell = CreateObject("WScript.Shell")
  strDesktopPath = objShell.SpecialFolders("Desktop")
  set objLink = objShell.CreateShortcut(strDesktopPath + "\" + strFilename + ".lnk")
  objLink.Arguments = strLinkArgs
  objLink.Description = strLinkDes
  objLink.TargetPath = strFilepath
  objLink.WindowStyle = strLinkWin
  objLink.WorkingDirectory = strLinkCwd
  objLink.Hotkey = strLinkHtk
  objLink.Save
end sub

call FileToLnk()