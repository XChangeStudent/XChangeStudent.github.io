function Game ()
{
    this.step = 1;
    this.subStep = 1;
    this.getInfo = getInfo;
}

// anti-pattern! keep reading...
function getInfo() {
    return 'Step:' + this.step + ' SubStep: ' + this.subStep;
}
