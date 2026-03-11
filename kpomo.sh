#!/bin/sh
# Name: KPomo
# Author: Kurizu
# DontUseFBInk
# Minimal installer script for Kindle

SOURCE_DIR="/mnt/us/documents/kpomo"
TARGET_DIR="/var/local/mesquite/kpomo"
DB="/var/local/appreg.db"
APP_ID="xyz.crizmo.kpomo"

# copy files
if [ -d "$SOURCE_DIR" ]; then
    if [ -d "$TARGET_DIR" ]; then
        rm -rf "$TARGET_DIR"
    fi
    cp -r "$SOURCE_DIR" "$TARGET_DIR"
else
    exit 1
fi

# register application
sqlite3 "$DB" <<EOF
INSERT OR IGNORE INTO interfaces(interface) VALUES('application');
INSERT OR IGNORE INTO handlerIds(handlerId) VALUES('$APP_ID');
INSERT OR REPLACE INTO properties(handlerId,name,value) \
  VALUES('$APP_ID','lipcId','$APP_ID');
INSERT OR REPLACE INTO properties(handlerId,name,value) \
  VALUES('$APP_ID','command','/usr/bin/mesquite -l $APP_ID -c file://$TARGET_DIR/');
INSERT OR REPLACE INTO properties(handlerId,name,value) \
  VALUES('$APP_ID','supportedOrientation','U');
EOF

echo Registered $APP_ID
sleep 2

nohup lipc-set-prop com.lab126.appmgrd start app://$APP_ID >/dev/null 2>&1 &
