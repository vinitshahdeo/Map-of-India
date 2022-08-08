/**
 * 
 * Code snippet to print 'Map Of India'
 * 
 * @author: Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
const MAGIC_STRING = "S'!F'!x P'!J'!t Q'!O'!n S'!N'!m Q'!O'!n R'!L'!p R'!L'!p T'!L'!n T'!H'!r T'!J'!p S'!N'!m Q'!P'!m P'!P'!`'!E'!U'!S'!]'!J'!Q'!W'!O'!A'!G'!J'!M'!^'!L'!B'!C'!L'!N'!e'!F'!B'!D'!H'!S'!}'!R'!nAL'!T'!lBL'!M'!FAkHF'!M'!uFE'!R'!pHC'!Q'!tHA'!S'!FAg'!a'!EAe'!j'!c'!j'!c'!m'!^'!q'!^'!p'!\\s'!Z'!u'!Y'!v'!X'!w'!T'!z'!S'!|'!P'!m R'!P'!l R'!O'!l S'!N'!m T'!L'!n T'!L'!n T'!L'!m-V'!H'!p!V'!F'!r W'!D'!s!"
var _logCounter = 0,
    _magicCounter = MAGIC_STRING.charCodeAt(_logCounter),
    _newLineCounter = 10;

while (_magicCounter !== 0) { 
    _magicCounter = MAGIC_STRING.charCodeAt(_logCounter);
    if(_magicCounter===39){
        process.stdout.write("-")
        _newLineCounter++
      }
    _logCounter++;
    while (_magicCounter > 64) {   
        _magicCounter--;
        ++_newLineCounter;
        if (_newLineCounter === 90) {  
            _newLineCounter = 10;
            process.stdout.write('\n'); 
        } else { 
            ((_logCounter >> 1) << 1 === _logCounter) ? process.stdout.write('!') : process.stdout.write(' '); 
        }
    } 
} 

/* 
  _    _                                                             
 | |  | |                                                            
 | |__| | __ _ _ __  _ __  _   _                                     
 |  __  |/ _` | '_ \| '_ \| | | |                                    
 | |  | | (_| | |_) | |_) | |_| |                                    
 |_|__|_|\__,_| .__/| .__/ \__, |             _                      
 |_   _|      | || || |     __/ |            | |                     
   | |  _ __  |_|| ||_|_ _ |___/___ _ __   __| | ___ _ __   ___ ___  
   | | | '_ \ / _` |/ _ \ '_ \ / _ \ '_ \ / _` |/ _ \ '_ \ / __/ _ \ 
  _| |_| | | | (_| |  __/ |_) |  __/ | | | (_| |  __/ | | | (_|  __/ 
 |_____|_| |_|\__,_|\___| .__/ \___|_| |_|\__,_|\___|_| |_|\___\___| 
 |  __ \                | |                                          
 | |  | | __ _ _   _    |_|                                          
 | |  | |/ _` | | | |                                                
 | |__| | (_| | |_| |                                                
 |_____/ \__,_|\__, |                                                
                __/ |                                                
               |___/                                                 

With <3 from @vinitshahdeo
 */