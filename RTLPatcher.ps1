$DownloadHostUrl = "https://raw.githubusercontent.com/amoAR/RTLPatcher/main"
$BetterDiscordFolder = "$env:APPDATA\BetterDiscord"
$BetterDiscordThemesFolder = "$BetterDiscordFolder\themes"
$BetterDiscordPluginsFolder = "$BetterDiscordFolder\plugins"
If ((Test-Path -Path $BetterDiscordFolder) -And (Test-Path -Path $BetterDiscordThemesFolder) -And (Test-Path -Path $BetterDiscordPluginsFolder)) {
    $Confirmation = $Host.UI.PromptForChoice('Confirmation', 'Discord may need to be closed to continue the process. Do you agree?', @('&Yes'; '&No'), 0)
    if ($Confirmation -eq 0) {
        Stop-Process -Name Discord -Force -ErrorAction SilentlyContinue
    } else {
        Write-Error -Message "Error: You didn't allow Discord to close when needed." -Category CloseError
        Write-host "`r`nPress any key to close..."
        [Void][System.Console]::ReadKey($False)
        [System.Environment]::Exit(0)
    }
    Clear-Host
    $Files = @{
        "$DownloadHostUrl/Themes/Material-Discord.theme.css" = "$BetterDiscordThemesFolder\Material-Discord.theme.css";
        "$DownloadHostUrl/Themes/Material-Discord_addon-material-you.theme.css" = "$BetterDiscordThemesFolder\Material-Discord_addon-material-you.theme.css";
        "$DownloadHostUrl/Themes/MicaCold.theme.css" = "$BetterDiscordThemesFolder\MicaCold.theme.css";
        "$DownloadHostUrl/Plugins/RTLPatcher.plugin.js" = "$BetterDiscordPluginsFolder\RTLPatcher.plugin.js";
    }
    ForEach ($File In $Files.GetEnumerator()) {
        Invoke-WebRequest -Uri $File.Key -OutFile $File.Value
    }
    [Console]::ForegroundColor = 'DarkGreen'
    [Console]::Error.WriteLine("Installed/Updated/Repaired successfully.")
    [Console]::Error.WriteLine("Now enable themes (Material-Discord, Materyal-You, MicaCold) in order and then enable RTLPathcer plugin.")
    [Console]::ResetColor()
} Else {
    Write-Error -Message "Error: Install BetterDiscord." -Category NotInstalled
}
Write-host "`r`nPress any key to close..."
[Void][System.Console]::ReadKey($False)
[System.Environment]::Exit(0)